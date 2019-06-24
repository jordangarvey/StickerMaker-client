import React, { SFC } from "react";
import { StyleSheet, View, Text } from "react-native";

import Shapes from "../Shapes";



/**
 * Interface for the Text Picker props
 */
interface ITextPickerProps {
	currentOption?: Shapes;
}

/**
 * Component to render the Text Picker
 */
const TextPicker: SFC<ITextPickerProps> = (props) => (
	<View><Text>Text picker</Text></View>
);

/**
 * Styles for the Text Picker
 */
const styles = StyleSheet.create({
	templateOptionsContainer: {
	
	}
});

export default TextPicker;
