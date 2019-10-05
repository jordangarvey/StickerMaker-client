import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Categories from "../Categories";
import Colours from "../Colours";
import Shapes from "../Shapes";

import * as C from "../../../Global/Colours";


/**
 * Interface for the Shape component
 */
interface IShapeProps {
	/** Callback to be fired whenever a shape option is pressed */
	onPress(category: Categories, option: Shapes): void;
	/** The shape this component should display as */
	shape: Shapes;
	/** The currently selected colour, to use as the preview colour */
	selectedColour: Colours;

	/** Optional boolean option value if this shape is selected */
	selected?: boolean;
}

/**
 * Component to render a shape button
 */
const Shape: FC<IShapeProps> = (props) => {
	let style: object;

	switch(props.shape) {
		case Shapes.Capsule:
			style = styles.capsule;
			break;
		case Shapes.Rect:
			style = styles.rect;
			break;
		case Shapes.Square:
			style = styles.square;
			break;
		default:
			throw new Error("Unknown shape");
	}

	return (
		<TouchableOpacity
			onPress={props.onPress.bind(null, Categories.Shape, props.shape)}
			style={
				[
					{ backgroundColor: props.selectedColour },
					style,
					styles.shape,
					props.selected && styles.selected
				]
			}
		/>
	);
};

const styles = StyleSheet.create({
	capsule: {
		borderRadius: 80,
		width: 120
	},
	rect: {
		borderRadius: 20,
		width: 120
	},
	selected: {
		borderColor: C.selected,
		borderWidth: 5
	},
	shape: {
		height: 70,
		marginHorizontal: 15,
	},
	square: {
		borderRadius: 20,
		width: 70
	}
});

export default Shape;
