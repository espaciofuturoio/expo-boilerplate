import { Box } from "@/components/ui/box";
import { useSizes } from "@/hooks/useSizes";
import { clsx } from "clsx";

const profile = { email: "test@test.com" };
export const DesktopHeader = () => {
	const { isMobile } = useSizes();
	if (isMobile) return null;
	return (
		<Box
			className={clsx(
				"backdrop-blur-md py-4 px-6 flex flex-row justify-between items-center z-20 relative min-h-fit",
				profile ? "bg-background-app-light-blue" : "bg-transparent",
			)}
		/>

	);
};
