import React, { SFC } from "react";
import { StyleSheet, View, Text } from "react-native";

import Shapes from "../Shapes";



/**
 * Interface for the Colour Picker props
 */
interface IColourPickerProps {
	currentOption?: Shapes;
}

/**
 * Component to render the Colour Picker
 */
const ColourPicker: SFC<IColourPickerProps> = (props) => (
	<View><Text>Colour picker</Text></View>
);

/**
 * Styles for the Colour Picker
 */
const styles = StyleSheet.create({
	templateOptionsContainer: {
	
	}
});

export default ColourPicker;
