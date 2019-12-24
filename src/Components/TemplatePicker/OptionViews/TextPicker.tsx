import React from "react";
import { StyleSheet, View } from "react-native";

import { useAppContext } from "../../../State/AppContext";

import ColourPicker from "./ColourPicker";
import Input from "../../Controls/Input";
import SizePicker from "./SizePicker";


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

			<ColourPicker value="textColour"/>
			<SizePicker maxiumumValue={30} minimumValue={10} value="textSize"/>
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
