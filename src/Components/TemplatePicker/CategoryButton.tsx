import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useAppContext } from "../../State/AppContext";

import { Icon } from "react-native-elements";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category props
 */
interface ICategoryButtonProps {
	/** The currently selected category this option belongs to e.g. shapes, text */
	category: string;
}


const CategoryButton: FC<ICategoryButtonProps> = (props) => {
	const [{ values }, dispatch] = useAppContext();

	function onChange() {
		const newValues = values;
		newValues.category = props.category;

		dispatch({ type: "updateCategory", newValues });
	}

	let icon: string;

	switch(props.category) {
		case "colour":
			icon = "palette";
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

	const selected = (props.category === values.category);

	return (
		<TouchableOpacity
			style={[
				styles.categoryButton,
				selected && { backgroundColor: C.primary }
			]}
			onPress={onChange}
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
