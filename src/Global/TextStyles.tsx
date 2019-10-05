import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import * as C from "./Colours";

/**
 * Interface for all the text component props
 */
interface ITextStylesProps {
	/** Optional callback to handle click events */
	onPress?: (e: any) => void;
	/** Optional style prop if additional styles are needed */
	style?: StyleProp<TextStyle>;
}

/**
 * Global component for the text body
 */
export const TextBody: FC<ITextStylesProps> = (props) => (
	<Text onPress={ props.onPress } style={ [Styles.textBodyStyles, props.style] }>{ props.children }</Text>
);

/**
 * Global styles for the text body
 */
export const textBodyStyles: TextStyle = {
	fontFamily: "System",
	fontSize: 18,
	color: C.textSecondary
};

/**
 * Global styles for all text style-groups
 */
const Styles = StyleSheet.create({
	textBodyStyles
});
