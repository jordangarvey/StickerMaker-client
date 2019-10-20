import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import colours from "../../../Data/colours";

import Colour from "./Colour";


/**
 * Component to render the Colour Picker
 */
const ColourPicker: FC = () => (
	<ScrollView contentContainerStyle={styles.colourPicker} horizontal={true}>
		{
			Object.keys(colours).map(colour => (
				<Colour
					key={colour}
					colour={colour}
				/>
			))
		}
	</ScrollView>
);

const styles = StyleSheet.create({
	colourPicker: {
		height: "100%",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "space-evenly"
	}
});

export default ColourPicker;
