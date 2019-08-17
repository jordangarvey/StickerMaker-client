import React, { FC, Fragment } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Categories from "../Categories";
import Colours from "../Colours";


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

const styles = StyleSheet.create({
	colour: {
		borderRadius: 25,
		height: 50,
		width: 50
	},
	selected: {
		borderColor: "green",
		borderWidth: 3
	}
});

export default Shape;
