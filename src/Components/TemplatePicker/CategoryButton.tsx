import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";

import { useAppContext } from "../../State/AppContext";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category props
 */
interface ICategoryButtonProps {
	/** The currently selected category this option belongs to e.g. shapes, text */
	category: string;
}


const CategoryButton: FC<ICategoryButtonProps> = (props) => {
	const [{ currentCategory }, dispatch] = useAppContext();

	function onPress() {
		dispatch({ payload: props.category, type: "updateCategory" });
	}

	let icon: string;

	switch(props.category) {
		case "colour":
			icon = "palette";
		break;

		case "outline":
			icon = "palette";
		break;

		case "shadow":
			icon = "crop-square";
		break;

		case "shape":
			icon = "crop-square";
		break;

		case "text":
			icon = "text-fields";
		break;

		default:
			throw new Error("Unknown category");
	}

	const selected = (props.category === currentCategory);

	return (
		<TouchableOpacity
			style={[
				styles.categoryButton,
				selected && { backgroundColor: C.primary }
			]}
			onPress={onPress}
		>
			<Icon
				color={selected ? C.textPrimary : C.textSecondary}
				name={icon}
				iconStyle={styles.categoryButtonIcon}
				size={28}
				type="material"
			/>

			<Text
				style={[
					styles.categoryButtonText,
					{ color: selected ? C.textPrimary : C.textSecondary }
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
