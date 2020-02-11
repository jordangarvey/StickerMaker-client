import React from "react";
import { StyleSheet, View } from "react-native";

import { useAppContext } from "../../../State/AppContext";

import Input from "../../Controls/Input";


/**
 * Component to render the Text Picker
 */
function TextPicker() {
	const [{ values }, dispatch] = useAppContext();

	function onChange(text: string) {
		const newValues = values;
		newValues.text = text;

		dispatch({ payload: newValues, type: "updateValues" });
	}

	return (
		<View style={styles.textPicker}>
			<Input
				onChange={onChange}
				placeholder="Enter sticker text"
				value={values.text || ""}
				width="100%"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textPicker: {
		justifyContent: "center",
		height: "100%",
		paddingHorizontal: 15,
		paddingTop: 10,
		width: "100%"
	}
});

export default TextPicker;
