import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";

import Categories from "./Categories";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category props
 */
interface ICategoryButtonProps {
	/** The currently selected category this option belongs to e.g. shapes, text */
	category: Categories;
	/** On press callback to be fired whenever the option button is pressed */
	onPress(category: Categories): void;

	/** Optional boolean for whether or not this option is currently selected */
	selected?: boolean;
}


const CategoryButton: FC<ICategoryButtonProps> = (props) => {
	let icon: string;

	switch(props.category) {
		case Categories.Colour:
			icon = "palette";
			break;
		case Categories.Shape:
			icon = "crop-square";
			break;
		case Categories.Text:
			icon = "text-fields";
			break;
		default:
			throw new Error("Unknown category");
	}

	return (
		<TouchableOpacity
			style={[
				styles.categoryButton,
				props.selected && { backgroundColor: C.primary }
			]}
			onPress={props.onPress.bind(null, props.category)}
		>
			<Icon
				color={props.selected ? C.textPrimary : C.textSecondary}
				name={icon}
				iconStyle={styles.categoryButtonIcon}
				size={28}
				type="material"
			/>

			<Text
				style={[
					styles.categoryButtonText,
					{ color: props.selected ? C.textPrimary : C.textSecondary }
				]}
			>
				{props.category.charAt(0).toUpperCase() + props.category.slice(1)}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	categoryButton: {
		alignItems: "center",
		backgroundColor: C.secondary,
		borderRadius: 6,
		height: 80,
		flexDirection: "column",
		justifyContent: "flex-end",
		marginHorizontal: 12,
		padding: 5,
		width: 60
	},
	categoryButtonIcon: {
		
	},
	categoryButtonText: {
		fontSize: 10,
		fontWeight: "bold"
	}
});

export default CategoryButton;
