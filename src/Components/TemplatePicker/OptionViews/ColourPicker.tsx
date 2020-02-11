import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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
	<View style={styles.colourPickerContainer}>
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
	</View>
);

const styles = StyleSheet.create({
	colourPicker: {
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "flex-start"
	},
	colourPickerContainer: {
		height: "100%"
	}
});

export default ColourPicker;
