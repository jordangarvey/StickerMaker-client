import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import colours from "../../../Data/colours";

import Colour from "./Colour";


interface IColourPickerProps {
	/** The state value to use */
	value: string;
}

/**
 * Component to render the Colour Picker
 */
const ColourPicker: FC<IColourPickerProps> = (props) => (
	<ScrollView contentContainerStyle={styles.colourPicker} horizontal={true}>
		{
			Object.keys(colours).map(colour => (
				<Colour
					colour={colour}
					key={colour}
					value={props.value}
				/>
			))
		}
	</ScrollView>
);

const styles = StyleSheet.create({
	colourPicker: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly"
	}
});

export default ColourPicker;
