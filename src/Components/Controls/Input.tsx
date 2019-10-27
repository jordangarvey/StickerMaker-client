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

	/** Should this input auto focus? */
	autoFocus?: boolean;
	/** Optional placeholder text */
	placeholder?: string;
	/** Optional width for this component */
	width?: number | string;
}

/**
 * Component to render the Input component
 */
const Input: FC<IInputProps> = (props) => (
	<TextInput
		autoFocus={false}
		onChangeText={props.onChange}
		placeholder={props.placeholder}
		returnKeyType="done"
		style={[styles.input, { width: props.width || 200 }]}
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
		padding: 5
	}
});

export default Input;
