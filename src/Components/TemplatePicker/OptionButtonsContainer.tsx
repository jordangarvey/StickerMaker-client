import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import categories from "../../Data/categories";
import { useAppContext } from "../../State/AppContext";

import OptionButton from "./OptionButton";


function OptionButtonsContainer() {
	const [{ currentCategory }] = useAppContext();

	return currentCategory
	? (
		<View style={styles.optionsContainer}>
			{
				<ScrollView contentContainerStyle={styles.optionsScroller} horizontal={true}>
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
	optionsContainer: {
		paddingBottom: 20,
		width: "100%"
	},
	optionsScroller: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
	}
});

export default OptionButtonsContainer;
