import { HEX_COLORS } from "@/components/ui/gluestack-ui-provider/config";
import { LinearGradient } from "@/components/ui/linear-gradient";
import clsx from "clsx";
import type { ReactNode } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export const AppGradient = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
	isLoading?: boolean;
}) => {
	return (
		<LinearGradient
			className={clsx("w-full items-center flex-1 justify-center", className)}
			colors={[HEX_COLORS.appDeepBlue, HEX_COLORS.appBlue]}
			start={[0.5, 0]}
			end={[0.5, 1]}
		>
			<Animated.View
				entering={FadeIn}
				exiting={FadeOut}
				accessibilityLabel="app-gradient"
				accessibilityRole="none"
			>
				{children}
			</Animated.View>
		</LinearGradient>
	);
};
