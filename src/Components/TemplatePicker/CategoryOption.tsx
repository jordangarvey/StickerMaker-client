import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Categories from "./Categories";
import Shapes from "./Shapes";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category Option props
 */
interface ICategoryOptionProps {
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
 * Component to render a Category Option button
 */
const CategoryOption: FC<ICategoryOptionProps> = (props) => {
	return (
		<View
			onPress={props.onPress.bind(null, props.option)}
			style={[
				styles.categoryOption,
				props.selected && { backgroundColor: C.primary, color: C.textPrimary }
			]}
		>
			<Text>{props.option.charAt(0).toUpperCase() + props.option.slice(1)}</Text>
		</View>
	);
};

/**
 * Styles for the Category Option button
 */
const styles = StyleSheet.create({
	categoryOption: {
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

export default CategoryOption;
