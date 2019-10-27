import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import categories from "../../Data/categories";

import CategoryButton from "./CategoryButton";


const CategoriesContainer: FC = () => (
	<View style={styles.categoriesContainer}>
		<ScrollView horizontal={true}>
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
 * Styles for the Categories Container
 */
const styles = StyleSheet.create({
	categoriesContainer: {
		marginBottom: 20,
		width: "100%"
	}
});

export default CategoriesContainer;
