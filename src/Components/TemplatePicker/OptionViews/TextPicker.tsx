import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Input from "../../Controls/Input";


/**
 * Interface for the Text Picker props
 */
interface ITextPickerProps {
	/** The currently selected text */
	currentText: string;
	/** Callback to be fired whenever the text value is changed */
	onChange(text: string): void;
}

/**
 * Component to render the Text Picker
 */
const TextPicker: FC<ITextPickerProps> = (props) => (
	<View style={styles.textPicker}>
		<Input
			onChange={props.onChange}
			value={props.currentText}
			width="100%"
		/>
	</View>
);

const styles = StyleSheet.create({
	textPicker: {
		justifyContent: "center",
		height: "100%",
		paddingHorizontal: 15,
		width: "100%"
	}
});

export default TextPicker;
