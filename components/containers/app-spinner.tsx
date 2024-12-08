import { Box } from "../ui/box";
import { HEX_COLORS } from "../ui/gluestack-ui-provider/config";
import { Spinner } from "../ui/spinner";

export const AppSpinner = () => {
	return <Spinner size="small" color={HEX_COLORS.appDeepBlue} />;
};

export const AppSpinnerFullScreen = () => {
	return (
		<Box className="flex-1 justify-center items-center bg-background-app-white w-full h-full">
			<AppSpinner />
		</Box>
	);
};
