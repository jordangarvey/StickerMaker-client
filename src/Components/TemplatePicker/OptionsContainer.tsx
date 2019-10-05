import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Categories from "./Categories";
import Colours from "./Colours";
import Shapes from "./Shapes";

import ColourPicker from "./OptionViews/ColourPicker";
import ShapePicker from "./OptionViews/ShapePicker";
import TextPicker from "./OptionViews/TextPicker";
import ISelectedOptions from "./ISelectedOptions";


/**
 * Interface for the Options Container props
 */
interface IOptionsContainerProps {
	/** The currently selected options */
	currentOptions: ISelectedOptions;
	/** Callback to be fired then the camera roll button is pressed */
	onCapture(): void;
	/** Callback to be fired whenever the text value changes */
	onChange(text: string): void;
	/** Callback to be fired whenever a option is pressed */
	onPress(category: Categories, option: Colours | Shapes): void;

	/** The currently selected category */
	currentCategory?: Categories;
}

/**
 * Component to render the Options Container
 */
const OptionsContainer: FC<IOptionsContainerProps> = (props) => {
	let options: JSX.Element | null = null;

	switch(props.currentCategory) {
		case Categories.Colour:
			options = <ColourPicker 
				currentColour={props.currentOptions.colour}
				onPress={props.onPress}
			/>;
			break;
		case Categories.Shape:
			options = <ShapePicker 
				currentShape={props.currentOptions.shape}
				onPress={props.onPress}
				selectedColour={props.currentOptions.colour}
			/>;
			break;
		case Categories.Text:
			options = <TextPicker
				currentText={props.currentOptions.text}
				onChange={props.onChange}
			/>;
			break;
	}

	return (
		<View style={styles.optionsContainer}>{options}</View>
	);
};

const styles = StyleSheet.create({
	optionsContainer: {
		height: 160,
		width: "100%"
	}
});

export default OptionsContainer;
