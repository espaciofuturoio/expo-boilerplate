import * as React from "react";
import Svg, { Rect, type SvgProps, Text } from "react-native-svg";

export const UnknownLogo = ({
	name,
	...props
}: SvgProps & { name: string }) => (
	<Svg data-name="Layer 1" viewBox="0 0 339.43 295.27" {...props}>
		<title>{name}</title>
		<Rect x="0" y="0" width="339.43" height="295.27" fill="#000" />
		<Text
			x="50%"
			y="50%"
			alignmentBaseline="middle"
			textAnchor="middle"
			fill="#fff"
			fontSize="120"
			fontFamily="Arial, sans-serif"
		>
			{`${name.slice(0, 4)}`.toUpperCase()}
		</Text>
	</Svg>
);
