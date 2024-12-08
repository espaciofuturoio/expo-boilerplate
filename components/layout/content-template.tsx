import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
export const ContentTemplate = ({
	name,
	children,
}: {
	name: string;
	children?: React.ReactNode;
}) => {
	return (
		<Box className="flex-1 items-center justify-center">
			<Heading>{name}</Heading>
			{children}
		</Box>
	);
};
