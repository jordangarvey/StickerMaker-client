import React, { SFC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Categories from "./Categories";

import Category from "./Category";


/**
 * Interface for the Template Categories Container props
 */
interface ITemplateCategoriesContainerProps {
	/** The currently selected category */
	currentCategory?: Categories;
	/** On press callback to be fired whenever the option button is pressed */
	onPress(category: Categories): void;
}

/**
 * Component to render a Template Categories Container
 */
const TemplateCategoriesContainer: SFC<ITemplateCategoriesContainerProps> = (props) => (
	<View style={styles.categoriesContainer}>
		<ScrollView horizontal={true}>
			{
				Object.keys(Categories).map(category => (
					<Category
						key={Categories[category]}
						category={Categories[category]}
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

export default TemplateCategoriesContainer;
