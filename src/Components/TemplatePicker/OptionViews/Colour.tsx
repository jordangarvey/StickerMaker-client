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
}

/**
 * Component to render a colour button
 */
function Colour(props: IShapeProps) {
	const [{ values }, dispatch] = useAppContext();

	function onChange() {
		const newValues = values;
		newValues.colour = props.colour;

		dispatch({ type: "updateValues", newValues });
	}

	return (
		<TouchableOpacity
			onPress={onChange}
			style={
				[
					{
						backgroundColor: colours[props.colour] || "#333333"
					},
					styles.colour,
					(values.colour === props.colour) && styles.selected
				]
			}
		/>
	);
}

const colourSize = 60;
const styles = StyleSheet.create({
	colour: {
		borderRadius: colourSize / 2,
		height: colourSize,
		marginHorizontal: 15,
		width: colourSize
	},
	selected: {
		borderColor: C.selected,
		borderWidth: 5
	}
});

export default Colour;
