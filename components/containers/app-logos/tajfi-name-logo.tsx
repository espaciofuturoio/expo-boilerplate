import { Image, type ImageContentFit } from "expo-image";

export const AppNameLogo = ({
	width = 133,
	height = 111,
	contentFit = "contain",
}: { width?: number; height?: number; contentFit?: ImageContentFit }) => {
	return (
		<Image
			source={require("./assets/app-name-logo.svg")}
			alt="App Logo"
			style={{ width, height }}
			contentFit={contentFit}
			role="img"
			aria-label="App Company Logo"
			onError={(error) => console.error("Failed to load App logo:", error)}
		/>
	);
};
