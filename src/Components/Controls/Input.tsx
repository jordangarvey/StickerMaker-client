import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";


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
	<View style={[styles.input, { width: props.width || 200 }]}>
		<TextInput
			autoFocus={false}
			onChangeText={props.onChange}
			placeholder={props.placeholder}
			returnKeyType="done"
			textContentType="none"
			value={props.value}
		/>
	</View>
);

const styles = StyleSheet.create({
	input: {
		borderBottomColor: "gray",
		borderBottomWidth: 1,
		fontSize: 14,
		height: 30
	}
});

export default Input;
