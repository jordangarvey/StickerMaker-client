import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Categories from "./Categories";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category props
 */
interface ICategoryProps {
	/** The currently selected category this option belongs to e.g. shapes, text */
	category: Categories;
	/** On press callback to be fired whenever the option button is pressed */
	onPress(category: Categories): void;
	/** Optional boolean for whether or not this option is currently selected */
	selected?: boolean;
}

/**
 * Component to render a Category button
 */
const Category: FC<ICategoryProps> = (props) => {
	return (
		<TouchableOpacity
			style={[
				styles.category,
				props.selected && { backgroundColor: C.primary }
			]}
			onPress={props.onPress.bind(null, props.category)}
		>
			<Text style={props.selected && { color: C.secondary }}>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</Text>
		</TouchableOpacity>
	);
};

/**
 * Styles for the Category button
 */
const styles = StyleSheet.create({
	category: {
		alignItems: "flex-end",
		backgroundColor: C.secondary,
		borderRadius: 6,
		height: 80,
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: 20,
		padding: 5,
		width: 60
	}
});

export default Category;
