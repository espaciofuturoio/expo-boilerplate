import { ContentTemplate } from "@/components/layout/content-template";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";

export default function App() {
	const init = () => {
		router.push("/send");
	};
	return (
		<ContentTemplate name="Home">
			<Pressable onPress={init}>
				<Text>Init</Text>
			</Pressable>
		</ContentTemplate>
	);
}
