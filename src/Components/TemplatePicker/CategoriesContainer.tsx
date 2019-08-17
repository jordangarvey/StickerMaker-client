import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Categories from "./Categories";

import Category from "./Category";


/**
 * Interface for the Categories Container props
 */
interface ICategoriesContainerProps {
	/** Callback to be fired whenever the option button is pressed */
	onPress(category: Categories): void;

	/** The currently selected category */
	currentCategory?: Categories;
}

const CategoriesContainer: FC<ICategoriesContainerProps> = (props) => (
	<View style={styles.categoriesContainer}>
		<ScrollView horizontal={true}>
			{
				Object.keys(Categories).map((category: any) => (
					<Category
						key={Categories[category]}
						category={Categories[category] as Categories}
						onPress={props.onPress}
						selected={Categories[category] === props.currentCategory}
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
