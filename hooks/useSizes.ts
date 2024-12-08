import { useMediaQuery } from "@/components/ui/utils/use-media-query";

export const useSizes = () => {
	const [isMobile, isTablet, isSmallScreen, isLargeScreen] = useMediaQuery([
		{
			maxWidth: 480,
		},
		{
			minWidth: 481,
			maxWidth: 768,
		},
		{
			minWidth: 769,
			maxWidth: 1440,
		},
		{
			minWidth: 1441,
		},
	]);

	return {
		isMobile,
		isTablet,
		isSmallScreen,
		isLargeScreen,
		isSmall: isMobile || isTablet,
		isLarge: isSmallScreen || isLargeScreen,
	};
};
