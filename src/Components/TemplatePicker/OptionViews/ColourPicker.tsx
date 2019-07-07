import React, { FC, Fragment } from "react";
import { StyleSheet } from "react-native";

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
	<Fragment>
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
	</Fragment>
);

/**
 * Styles for the Colour Picker
 */
const styles = StyleSheet.create({
});

export default ColourPicker;
