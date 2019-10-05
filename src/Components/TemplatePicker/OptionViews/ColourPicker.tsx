import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import Categories from "../Categories";
import Colours from "../Colours";

import Colour from "./Colour";


/**
 * Interface for the Colour Picker props
 */
interface IColourPickerProps {
		/** The currently selected colour */
	currentColour: Colours;
	/** Callback to be fired whenever the text value is changed */
	onPress(category: Categories, option: string): void;
}

/**
 * Component to render the Colour Picker
 */
const ColourPicker: FC<IColourPickerProps> = (props) => (
	<ScrollView contentContainerStyle={styles.colourPicker} horizontal={true}>
		{
			Object.keys(Colours).map((colour: any) => (
				<Colour
					key={Colours[colour]}
					onPress={props.onPress}
					colour={Colours[colour] as Colours}
					selected={Colours[colour] === props.currentColour}
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
