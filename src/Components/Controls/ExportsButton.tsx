import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
		<View style={styles.exportsButtonContainer}>
			<TouchableOpacity
				onPress={props.onCopy}
				style={styles.exportsButton}
			>
				<Text style={styles.buttonText}>Copy to clipboard</Text>
			</TouchableOpacity>
		</View>
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
		flexDirection: "row",
		height: 70,
		justifyContent: "center",
		padding: 5,
		width: "100%"
	},
	exportsButtonContainer: {
		paddingBottom: 30,
		paddingTop: 10,
		paddingHorizontal: 15,
		width: "100%"
	}
});

export default ExportsButton;
