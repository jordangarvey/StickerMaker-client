import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colours from "../../Data/colours";
import { useAppContext } from "../../State/AppContext";


/**
 * Component to render a Template Item
 */
function TemplateItem() {
	const [{ values }] = useAppContext();

	let shape: object;

	switch(values.shape) {
		case "Capsule":
			shape = styles.capsule;
			break;
		case "Rectangle":
			shape = styles.rect;
			break;
		case "Square":
			shape = styles.square;
			break;
		default:
			throw new Error("Unknown shape");
	}

	return (
		<View style={[{ backgroundColor: colours[values.colour] }, styles.item, shape]}>
			<Text style={styles.text}>{values.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	capsule: {
		borderRadius: 50,
		height: 100,
		width: 200
	},
	item: {
		alignItems: "center",
		justifyContent: "center"
	},
	rect: {
		borderRadius: 6,
		height: 100,
		width: 200
	},
	square: {
		borderRadius: 6,
		height: 200,
		width: 200
	},
	text: {
		color: "white",
		fontSize: 20
	}
});

export default TemplateItem;
