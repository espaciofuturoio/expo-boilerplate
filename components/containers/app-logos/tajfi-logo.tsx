import { Image, type ImageContentFit } from "expo-image";

export const AppLogo = ({
	width = 232 * 0.6,
	height = 393 * 0.6,
	contentFit = "contain",
}: { width?: number; height?: number; contentFit?: ImageContentFit }) => {
	return (
		<Image
			source={require("./assets/app-logo.svg")}
			alt="App Logo"
			style={{ width, height }}
			contentFit={contentFit}
		/>
	);
};
