import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ title: "My Profile" }} />
			<Stack.Screen name="[asset]" getId={({ params }) => String(Date.now())} />
		</Stack>
	);
}
