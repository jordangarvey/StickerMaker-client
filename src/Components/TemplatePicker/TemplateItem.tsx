import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Shapes from "./Shapes";


/**
 * Interface for the Template Item props
 */
interface ITemplateItemProps {
	/** The colour of the item */
	colour: string;
	/** The shape of the item */
	shape: Shapes;
	/** The text of the sticker */
	text: string;
}

/**
 * Component to render a Template Item
 */
const TemplateItem: FC<ITemplateItemProps> = (props) => {
	let shape: object;

	switch(props.shape) {
		case Shapes.Rect:
			shape = styles.rect;
			break;
		case Shapes.Square:
			shape = styles.square;
			break;
		default:
			throw new Error("Unknown shape");
	}

	return (
		<View style={[{ backgroundColor: props.colour }, styles.item, shape]}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		alignItems: "center",
		borderRadius: 6,
		justifyContent: "center"
	},
	rect: {
		height: 100,
		width: 200
	},
	square: {
		height: 200,
		width: 200
	},
	text: {
		color: "white"
	}
});

export default TemplateItem;
