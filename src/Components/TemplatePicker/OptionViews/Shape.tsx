import React, { FC, Fragment } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Categories from "../Categories";
import Shapes from "../Shapes";


/**
 * Interface for the Shape component
 */
interface IShapeProps {
	/** Callback to be fired whenever a shape option is pressed */
	onPress(category: Categories, option: Shapes): void;
	/** The shape this component should display as */
	shape: Shapes;

	/** Optional boolean option value if this shape is selected */
	selected?: boolean;
}

/**
 * Component to render a shape button
 */
const Shape: FC<IShapeProps> = (props) => {
	let style: object;
	let text: string;

	switch(props.shape) {
		case Shapes.Rect:
			style = styles.rect;
			text = "Rectangle";
			break;
		case Shapes.Square:
			style = styles.square;
			text = "Square"
			break;
		default:
			throw new Error("Unknown shape");
	}

	return (
		<Fragment>
			<TouchableOpacity
				onPress={props.onPress.bind(null, Categories.Shape, props.shape)}
				style={
					[
						style,
						styles.shape,
						props.selected && styles.selected
					]
				}
			/>
			<Text>{text}</Text>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	rect: {
		backgroundColor: "green",
		width: 80
	},
	selected: {
		borderColor: "green",
		borderWidth: 3
	},
	shape: {
		borderRadius: 20,
		height: 50
	},
	square: {
		backgroundColor: "yellow",
		width: 50
	}
});

export default Shape;
