import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colours from "../../../Data/colours";
import shapes from "../../../Data/shapes";
import { useAppContext } from "../../../State/AppContext";


import * as C from "../../../Global/Colours";


/**
 * Interface for the Shape component
 */
interface IShapeProps {
	/** The shape this component should display as */
	shape: string;
}

/**
 * Component to render a shape button
 */
function Shape(props: IShapeProps) {
	const [{ values }, dispatch] = useAppContext();

	function onChange() {
		const newValues = values;
		newValues.shape = props.shape;

		dispatch({ payload: newValues, type: "updateValues" });
	}

	let style: object;

	switch(props.shape) {
		case "Capsule":
			style = styles.capsule;
			break;
		case "Rectangle":
			style = styles.rect;
			break;
		case "Square":
			style = styles.square;
			break;
		default:
			throw new Error("Unknown shape");
	}

	return (
		<TouchableOpacity
			onPress={onChange}
			style={
				[
					{ backgroundColor: colours[values.colour] || "#333333" },
					style,
					styles.shape,
					(values.shape === props.shape) && styles.selected
				]
			}
		/>
	);
}

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
