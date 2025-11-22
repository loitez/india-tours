import { DefaultProps } from "./default.types.ts";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps extends DefaultProps {
	icon: string;
	color?: string;
	size?: SizeProp;
}
