import React, { FC, Fragment } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Categories from "../Categories";
import Colours from "../Colours";

import * as C from "../../../Global/Colours";


/**
 * Interface for the Colour component
 */
interface IShapeProps {
	/** Callback to be fired whenever a shape option is pressed */
	onPress(category: Categories, option: Colours): void;
	/** The shape this component should display as */
	colour: Colours;

	/** Optional boolean option value if this shape is selected */
	selected?: boolean;
}

/**
 * Component to render a colour button
 */
const Shape: FC<IShapeProps> = (props) => (
	<Fragment>
		<TouchableOpacity
			onPress={props.onPress.bind(null, Categories.Colour, props.colour)}
			style={
				[
					{
						backgroundColor: props.colour
					},
					styles.colour,
					props.selected && styles.selected
				]
			}
		/>
	</Fragment>
);

const colourSize = 60;
const styles = StyleSheet.create({
	colour: {
		borderRadius: colourSize / 2,
		height: colourSize,
		marginHorizontal: 15,
		width: colourSize
	},
	selected: {
		borderColor: C.selected,
		borderWidth: 5
	}
});

export default Shape;
