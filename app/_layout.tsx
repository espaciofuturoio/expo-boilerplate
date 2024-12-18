import { Stack } from "expo-router";
import "react-native-reanimated";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/context/auth/auth-context";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useFonts, loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { Platform } from "react-native";
import { AppGradient } from "@/components/containers/app-gradient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
	duration: 1000,
	fade: true,
});

export default function RootLayout() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// make any API calls you need to do here
				// Pre-load fonts
				await Promise.all([
					loadAsync(Entypo.font),
					loadAsync(Feather.font),
					loadAsync(AntDesign.font),
					loadAsync(MaterialIcons.font),
				]);
				// wait for 5 seconds to simulate a slow loading time
				// await new Promise(resolve => setTimeout(resolve, 5000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const [loaded] = useFonts({
		PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
		PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(() => {
		if (appIsReady && loaded) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			SplashScreen.hide();
		}
	}, [appIsReady, loaded]);

	if (!appIsReady || !loaded) {
		if (Platform.OS === "web") {
			return <Animated.View entering={FadeIn} exiting={FadeOut} style={{ flex: 1 }}><AppGradient /></Animated.View>;
		}
		return null;
	}

	return (
		<AuthProvider>
			<GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<ActionSheetProvider>
					<GluestackUIProvider mode="light">
						<Stack screenOptions={{ headerShown: false }} />
					</GluestackUIProvider>
				</ActionSheetProvider>
			</GestureHandlerRootView>
		</AuthProvider>
	);
}
