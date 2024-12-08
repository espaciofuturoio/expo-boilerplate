import { HEX_COLORS } from "@/components/ui/gluestack-ui-provider/config";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { Wallet } from "lucide-react-native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
	useSharedValue,
	withSpring,
	useAnimatedStyle,
	interpolate,
} from "react-native-reanimated";

type FeatherIconProps = {
	color?: string;
	size?: number;
};

const icons: Record<string, (props: FeatherIconProps) => React.ReactNode> = {
	send: (props: FeatherIconProps) => (
		<Feather name="send" size={24} color="black" {...props} />
	),
	receive: (props: FeatherIconProps) => (
		<Feather name="download" size={24} color="black" {...props} />
	),
	profile: (props: FeatherIconProps) => (
		<Wallet size={24} color="black" {...props} />
	),
	history: (props: FeatherIconProps) => (
		<Entypo name="back-in-time" size={24} color="black" {...props} />
	),
};

export const TabBarButton = ({
	options,
	onPress,
	onLongPress,
	isFocused,
	label,
	routeName,
	href,
}: {
	options: BottomTabNavigationOptions;
	onPress: () => void;
	onLongPress: () => void;
	isFocused: boolean;
	label: string;
	routeName: string;
	href: string | undefined;
}) => {
	const scale = useSharedValue(0);

	const animatedTextStyle = useAnimatedStyle(() => {
		return {
			opacity: scale.value,
		};
	});

	const animatedIconStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: interpolate(scale.value, [0, 1], [1.2, 1]) }],
			top: interpolate(scale.value, [0, 1], [12, 0]),
		};
	});

	useEffect(() => {
		scale.value = isFocused
			? withSpring(0, { duration: 350 })
			: withSpring(1, { duration: 350 });
	}, [isFocused, scale]);

	const activeRouteColor = isFocused
		? HEX_COLORS.appDeepBlue
		: HEX_COLORS.appWhite;

	return (
		<PlatformPressable
			accessibilityState={isFocused ? { selected: true } : {}}
			accessibilityLabel={options.tabBarAccessibilityLabel}
			testID={options.tabBarButtonTestID}
			onPress={onPress}
			onLongPress={onLongPress}
			style={styles.tabBarItem}
			href={href}
		>
			<Animated.View style={animatedIconStyle}>
				{icons[routeName as keyof typeof icons]?.({
					color: HEX_COLORS.appWhite,
				})}
			</Animated.View>
			<Animated.Text
				style={[
					{
						color: activeRouteColor,
					},
					animatedTextStyle,
				]}
			>
				{label}
			</Animated.Text>
		</PlatformPressable>
	);
};

const styles = StyleSheet.create({
	tabBarItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
});
