import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";


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
	<TextInput
		autoFocus={true}
		onChangeText={props.onChange}
		value={props.currentText}
	/>
);

const styles = StyleSheet.create({
});

export default TextPicker;
