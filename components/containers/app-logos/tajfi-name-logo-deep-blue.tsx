import { Image, type ImageContentFit } from "expo-image";

export const AppNameLogoDeepBlue = ({
	width = 133,
	height = 111,
	contentFit = "contain",
}: { width?: number; height?: number; contentFit?: ImageContentFit }) => {
	return (
		<Image
			source={require("./assets/app-name-logo-deep-blue.svg")}
			alt="App Logo"
			style={{ width, height }}
			contentFit={contentFit}
		/>
	);
};
