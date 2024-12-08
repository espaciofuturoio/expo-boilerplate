import { Box } from "@/components/ui/box";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Wallet } from "lucide-react-native";

export const TabBarIcons = () => {
	return (
		<Box className="hidden">
			<Feather name="send" size={24} color="black" />
			<Feather name="download" size={24} color="black" />
			<AntDesign name="swap" size={24} color="black" />
			<Wallet size={24} color="black" />
			<Entypo name="back-in-time" size={24} color="black" />
		</Box>
	);
};
