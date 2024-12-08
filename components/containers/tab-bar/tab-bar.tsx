import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { type LayoutChangeEvent, Platform, StyleSheet } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

import { HEX_COLORS } from "@/components/ui/gluestack-ui-provider/config";
import { useSizes } from "@/hooks/useSizes";
import type { Href } from "expo-router";
import { router } from "expo-router";
import { TabBarButton } from "./tab-bar-button";

const TAB_BAR_HORIZONTAL_PADDING = 12;

const calculateTabPositionX = ({
	index,
	buttonWidth,
	circleSize,
}: { index: number; buttonWidth: number; circleSize: number }) => {
	return (
		buttonWidth * index +
		buttonWidth / 2 -
		circleSize / 2 -
		TAB_BAR_HORIZONTAL_PADDING
	);
};

export const BottomTabBar = ({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) => {
	const { isSmall } = useSizes();
	const opacity = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
	}));

	const { buildHref } = useLinkBuilder();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const buttonWidth = dimensions.width / (state.routes.length || 1);

	const onTabBarLayout = (event: LayoutChangeEvent) => {
		setDimensions({
			width: event.nativeEvent.layout.width,
			height: event.nativeEvent.layout.height,
		});
	};

	const tabPositionX = useSharedValue(0);
	const animatedBackgroundStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: tabPositionX.value }],
		};
	});

	const circleSize = Math.min(dimensions.height - 15, buttonWidth - 25);

	const updateTabPositionX = useCallback(() => {
		tabPositionX.value = withSpring(
			calculateTabPositionX({ index: state.index, buttonWidth, circleSize }),
			{
				duration: 1000,
			},
		);
	}, [state.index, buttonWidth, circleSize, tabPositionX]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: only depends on state.index and dimensions
	useEffect(() => {
		updateTabPositionX();
	}, [state.index, dimensions, updateTabPositionX]);

	return (
		<Animated.View
			style={[
				styles.tabBar,
				animatedStyle,
				{ maxWidth: isSmall ? "100%" : 350 },
				{ borderRadius: isSmall ? 0 : 35 },
				{ bottom: isSmall ? 0 : 20 },
			]}
			onLayout={onTabBarLayout}
		>
			<Animated.View
				data-id="tab-bar-background"
				style={[
					animatedBackgroundStyle,
					{
						position: "absolute",
						borderRadius: circleSize / 2,
						backgroundColor: HEX_COLORS.appBlue,
						marginHorizontal: TAB_BAR_HORIZONTAL_PADDING,
						height: circleSize,
						width: circleSize,
					},
				]}
			/>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					updateTabPositionX();
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						console.log({
							route,
						});
						router.push(`/${route.name}` as Href);
					}
				};

				const onLongPress = () => {
					updateTabPositionX();
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				const href = buildHref(route.name, route.params)?.replace(
					"/undefined",
					"/",
				);

				return (
					<TabBarButton
						key={route.name}
						options={options}
						onPress={onPress}
						onLongPress={onLongPress}
						isFocused={isFocused}
						label={label as string}
						routeName={route.name}
						href={href}
					/>
				);
			})}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		position: "absolute",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: HEX_COLORS.appDeepBlue,
		marginHorizontal: "auto",
		width: "100%",
		paddingVertical: 15,
		...Platform.select({
			ios: {
				shadowColor: "rgba(0, 0, 0, 0.1)",
				shadowOffset: { width: 0, height: 10 },
				shadowOpacity: 1,
				shadowRadius: 10,
			},
			android: {
				elevation: 10,
			},
			web: {
				boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
			},
		}),
		alignSelf: "center",
	},
});

// ref: https://www.youtube.com/watch?v=GrLCS5ww030
