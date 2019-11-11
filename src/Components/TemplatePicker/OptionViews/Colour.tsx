import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colours from "../../../Data/colours";
import { useAppContext } from "../../../State/AppContext";

import * as C from "../../../Global/Colours";


/**
 * Interface for the Colour component
 */
interface IShapeProps {
	/** The colour this component should display as */
	colour: string;
	/** The state value to use */
	value: string;
}

/**
 * Component to render a colour button
 */
function Colour(props: IShapeProps) {
	const [{ values }, dispatch] = useAppContext();

	function onChange() {
		const newValues = values;
		newValues[props.value] = props.colour;

		dispatch({ payload: newValues, type: "updateValues" });
	}

	return (
		<TouchableOpacity
			onPress={onChange}
			style={
				[
					{
						backgroundColor: colours[props.colour]
					},
					styles.colour,
					(values[props.value] === props.colour) && styles.selected
				]
			}
		/>
	);
}

const size = 60;
const styles = StyleSheet.create({
	colour: {
		borderRadius: size / 2,
		height: size,
		marginHorizontal: 15,
		width: size
	},
	selected: {
		borderColor: C.selected,
		borderWidth: 5
	}
});

export default Colour;
