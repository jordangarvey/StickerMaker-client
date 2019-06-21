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
}

/**
 * Component to render a Template Categories Container
 */
const TemplateCategoriesContainer: SFC<ITemplateCategoriesContainerProps> = (props: ITemplateCategoriesContainerProps) => (
	<View style={styles.categoriesContainer}>
		<ScrollView horizontal={true}>
			{
				Object.keys(Categories).map((category) => (
					<Category key={Categories[category]} category={Categories[category]} selected={Categories[category] === props.currentCategory}/>
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
		width: "100%"
	}
});

export default TemplateCategoriesContainer;
