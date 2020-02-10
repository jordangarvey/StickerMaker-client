import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useAppContext } from "../../State/AppContext";

import * as C from "../../Global/Colours";


/**
 * Interface for the Category Button props
 */
interface ICategoryButtonProps {
	/** The currently selected category this button belongs to e.g. shapes, text */
	category: string;
}


const CategoryButton: FC<ICategoryButtonProps> = (props) => {
	const [{ currentCategory }, dispatch] = useAppContext();

	function onPress() {
		dispatch({
			payload: undefined,
			type: "updateOption"
		});

		dispatch({
			payload: currentCategory !== props.category ? props.category : undefined,
			type: "updateCategory"
		});
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
		backgroundColor: C.background,
		borderRadius: 6,
		height: 50,
		flexDirection: "column",
		justifyContent: "space-around",
		margin: 12,
		padding: 5,
		width: 115
	},
	categoryButtonText: {
		fontSize: 14,
		fontWeight: "bold"
	}
});

export default CategoryButton;
