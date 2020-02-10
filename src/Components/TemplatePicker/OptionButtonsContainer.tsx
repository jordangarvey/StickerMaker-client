import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import categories from "../../Data/categories";
import { useAppContext } from "../../State/AppContext";

import OptionButton from "./OptionButton";


function OptionButtonsContainer() {
	const [{ currentCategory }] = useAppContext();

	return currentCategory
	? (
		<View style={styles.categoriesContainer}>
			{
				<ScrollView contentContainerStyle={styles.categoriesScroller} horizontal={true}>
					<OptionButton/>
					{
						Object.keys(categories[currentCategory].options).map(option => (
							<OptionButton
								key={option}
								option={option}
								text={categories[currentCategory].options[option]}
							/>
						))
					}
				</ScrollView>
			}
		</View>
	)
	: null;
}

/**
 * Styles for the Option Buttons Container
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

export default OptionButtonsContainer;
