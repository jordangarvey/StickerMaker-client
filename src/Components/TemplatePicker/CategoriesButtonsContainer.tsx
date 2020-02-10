import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import categories from "../../Data/categories";

import CategoryButton from "./CategoryButton";


const CategoriesButtonsContainer: FC = () => (
	<View style={styles.categoriesContainer}>
		<ScrollView contentContainerStyle={styles.categoriesScroller} horizontal={true}>
			{
				Object.keys(categories).map(category => (
					<CategoryButton
						key={category}
						category={category}
					/>
				))
			}
		</ScrollView>
	</View>
);

/**
 * Styles for the Categories Buttons Container
 */
const styles = StyleSheet.create({
	categoriesContainer: {
		width: "100%"
	},
	categoriesScroller: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	}
});

export default CategoriesButtonsContainer;
