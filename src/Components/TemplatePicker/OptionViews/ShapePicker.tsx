import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Categories from "../Categories";
import Colours from "../Colours";
import Shapes from "../Shapes";

import Shape from "./Shape";


/**
 * Interface for the Shape Picker props
 */
interface IShapePickerProps {
	/** The currently selected shape */
	currentShape: Shapes;
	/** Callback to be fired whenever a shape option is pressed */
	onPress(category: Categories, option: Shapes): void;
	/** The currently selected colour, to use as the preview colour */
	selectedColour: Colours;
}

/**
 * Component to render the Shape Picker
 */
const ShapePicker: FC<IShapePickerProps> = (props) => (
	<View style={styles.shapePicker}>
		{
			Object.keys(Shapes).map((shape: any) => (
				<Shape
					key={Shapes[shape]}
					onPress={props.onPress}
					shape={Shapes[shape] as Shapes}
					selected={Shapes[shape] === props.currentShape}
					selectedColour={props.selectedColour}
				/>
			))
		}
	</View>
);

const styles = StyleSheet.create({
	shapePicker: {
		alignItems: "center",
		height: "100%",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "flex-start"
	}
});

export default ShapePicker;
