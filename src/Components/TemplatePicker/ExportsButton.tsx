import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import * as C from "../../Global/Colours";


/**
 * Interface for the Template Item props
 */
interface IExportsButtonProps {
	/** Callback to handle the image rendering */
	onCapture(): void;
	/** Tag of the image to save */
	tag: string;
}

/**
 * Component to render a Category button
 */
const ExportsButton: FC<IExportsButtonProps> = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onCapture}
			style={styles.exportsButton}
		>
			<Text style={styles.buttonText}>Export to camera roll</Text>
		</TouchableOpacity>
	);
};

/**
 * Styles for the Category button
 */
const styles = StyleSheet.create({
	buttonText: {
		color: C.secondary,
		fontSize: 16,
		fontWeight: "bold"
	},
	exportsButton: {
		alignItems: "center",
		backgroundColor: C.primary,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		height: 70,
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: 20,
		padding: 5,
		width: "100%"
	}
});

export default ExportsButton;
