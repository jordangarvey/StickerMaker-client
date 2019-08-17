import React, { FC, Fragment } from "react";
import { StyleSheet } from "react-native";

import Categories from "../Categories";
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
}

/**
 * Component to render the Shape Picker
 */
const ShapePicker: FC<IShapePickerProps> = (props) => (
	<Fragment>
		{
			Object.keys(Shapes).map((shape: any) => (
				<Shape
					key={Shapes[shape]}
					onPress={props.onPress}
					shape={Shapes[shape] as Shapes}
					selected={Shapes[shape] === props.currentShape}
				/>
			))
		}
	</Fragment>
);

const styles = StyleSheet.create({
	
});

export default ShapePicker;
