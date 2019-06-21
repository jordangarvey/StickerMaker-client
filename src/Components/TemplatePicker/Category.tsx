import React, { SFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Categories from "./Categories";


/**
 * Interface for the Category props
 */
interface ICategoryProps {
	category: Categories;
}

/**
 * Component to render a Category button
 */
const Category: SFC<ICategoryProps> = (props: ICategoryProps) => (
	<View style={styles.category}>
		<Text>{props.category}</Text>
	</View>
);

/**
 * Styles for the Category button
 */
const styles = StyleSheet.create({
	category: {
		backgroundColor: "red",
		borderRadius: 6,
		height: 100,
		marginHorizontal: 20,
		width: 60
	}
});

export default Category;
