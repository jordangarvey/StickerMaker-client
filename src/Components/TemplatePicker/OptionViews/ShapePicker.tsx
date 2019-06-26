import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

import Shapes from "../Shapes";



/**
 * Interface for the Shape Picker props
 */
interface IShapePickerProps {
	currentOption?: Shapes;
}

/**
 * Component to render the Shape Picker
 */
const ShapePicker: FC<IShapePickerProps> = (props) => (
	<View><Text>Shape picker</Text></View>
);

/**
 * Styles for the Shape Picker
 */
const styles = StyleSheet.create({
	templateOptionsContainer: {
	
	}
});

export default ShapePicker;
