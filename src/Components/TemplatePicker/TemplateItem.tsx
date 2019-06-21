import React, { SFC } from "react";
import { StyleSheet, Text, View } from "react-native";


/**
 * Interface for the Template Item props
 */
interface ITemplateItemProps {
	/** The shape of the item. This is the base property as all instances must have at least this */
	shape: "capsule" | "circle" | "square"
	/** The colour of the item */
	colour?: string;
	/** The text of the sticker */
	text?: string;
}

/**
 * Component to render a Template Item
 */
const TemplateItem: SFC<ITemplateItemProps> = (props: ITemplateItemProps) => (
	<View style={[{ backgroundColor: props.colour || "yellow" }, styles.item]}>
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
