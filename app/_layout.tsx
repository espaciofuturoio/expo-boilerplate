import { Stack } from "expo-router";
import "react-native-reanimated";
import "@/global.css";
import { TabBarIcons } from "@/components/containers/tab-bar/tab-bar-icons";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/context/auth/auth-context";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
		PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}
	return (
		<AuthProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<ActionSheetProvider>
					<GluestackUIProvider mode="light">
						<Stack screenOptions={{ headerShown: false }} />
					</GluestackUIProvider>
				</ActionSheetProvider>
			</GestureHandlerRootView>
			{/* Hidden icons for prefetching */}
			{/* TODO: remove this once we have a better way to prefetch icons */}
			<TabBarIcons />
		</AuthProvider>
	);
}
