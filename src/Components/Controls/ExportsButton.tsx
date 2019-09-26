import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import * as C from "../../Global/Colours";


/**
 * Interface for the Template Item props
 */
interface IExportsButtonProps {
	/** Callback to handle the image copying */
	onCopy(): void;
}

/**
 * Component to render a Category button
 */
const ExportsButton: FC<IExportsButtonProps> = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onCopy}
			style={styles.exportsButton}
		>
			<Text style={styles.buttonText}>Copy to clipboard</Text>
		</TouchableOpacity>
	);
};

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
		bottom: 20,
		flexDirection: "row",
		height: 70,
		justifyContent: "center",
		left: "10%",
		marginTop: 40,
		padding: 5,
		width: "90%"
	}
});

export default ExportsButton;
