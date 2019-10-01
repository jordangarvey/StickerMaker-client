import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";


/**
 * Interface for the Input props
 */
interface IInputProps {
	/** Callback to be fired whenever the text value is changed */
	onChange(text: string): void;
	/** The currently selected text */
	value: string;
}

/**
 * Component to render the Input component
 */
const Input: FC<IInputProps> = (props) => (
	<TextInput
		autoFocus={false}
		onChangeText={props.onChange}
		returnKeyType="done"
		style={styles.input}
		textContentType="none"
		value={props.value}
	/>
);

const styles = StyleSheet.create({
	input: {
		borderColor: "gray",
		borderWidth: 1, 
		fontSize: 14,
		height: 40,
		padding: 5,
		width: "100%"
	}
});

export default Input;
