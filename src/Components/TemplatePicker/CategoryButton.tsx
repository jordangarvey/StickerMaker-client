import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Categories from "./Categories";
import Shapes from "./Shapes";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category Button props
 */
interface ICategoryButtonProps {
	/** The currently selected category this option belongs to e.g. shapes, text */
	category: Categories;
	/** The option that this button should display e.g. circle, square */
	option: Shapes;
	/** On press callback to be fired whenever the option button is pressed */
	onPress(option: Shapes): void;

	/** Optional boolean for whether or not this option is currently selected */
	selected?: boolean;
}

/**
 * Component to render a Category Button button
 */
const CategoryButton: FC<ICategoryButtonProps> = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress.bind(null, props.option)}
			style={[
				styles.CategoryButton,
				props.selected && { backgroundColor: C.primary }
			]}
		>
			<Text style={props.selected && { color: C.textPrimary }}>
				{ props.option.charAt(0).toUpperCase() + props.option.slice(1) }
			</Text>
		</TouchableOpacity>
	);
};

/**
 * Styles for the Category Button button
 */
const styles = StyleSheet.create({
	CategoryButton: {
		alignItems: "flex-end",
		backgroundColor: C.secondary,
		borderRadius: 6,
		height: 80,
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: 10,
		padding: 5,
		width: 60
	}
});

export default CategoryButton;
