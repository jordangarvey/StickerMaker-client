import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Categories from "./Categories";
import Colours from "./Colours";
import Shapes from "./Shapes";

import ColourPicker from "./OptionViews/ColourPicker";
import ExportsButton from "./ExportsButton";
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
		<View style={styles.optionsContainer}>
			<ScrollView horizontal={true} style={styles.optionsScrollContainer}>{options}</ScrollView>

			<ExportsButton onCapture={props.onCapture}/>
		</View>
	);
};

const styles = StyleSheet.create({
	optionsScrollContainer: {
		height: 200,
		width: "100%"
	},
	optionsContainer: {
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderWidth: 0.5,
		height: 300,
		width: "100%"
	}
});

export default OptionsContainer;
