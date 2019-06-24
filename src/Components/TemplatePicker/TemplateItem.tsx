import React, { SFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Shapes from "./Shapes";


/**
 * Interface for the Template Item props
 */
interface ITemplateItemProps {
	/** The shape of the item */
	shape?: Shapes;
	/** The colour of the item */
	colour?: string;
	/** The text of the sticker */
	text?: string;
}

/**
 * Component to render a Template Item
 */
const TemplateItem: SFC<ITemplateItemProps> = (props) => (
	<View style={[{ backgroundColor: props.colour || "green" }, styles.item]}>
		<Text>{props.text}</Text>
	</View>
);

/**
 * Styles for the Template Item
 */
const styles = StyleSheet.create({
	item: {
		height: 100,
		width: 200
	}
});

export default TemplateItem;
