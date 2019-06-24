import React, { SFC } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";


/**
 * Interface for the Button props
 */
interface IButtonProps {
	/** The current tab of the template choosing process */
	onPress(): void;
	/** The button text */
	text?: string;
}

/**
 * Component to render a Button
 */
const Button: SFC<IButtonProps> = (props) => (
	<TouchableOpacity onPress={props.onPress} style={styles.button}>
		<Text>{props.text || props.children}</Text>
	</TouchableOpacity>
);

/**
 * Styles for the Button
 */
const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderRadius: 12,
		color: "black",
		fontSize: 24,
		overflow: "hidden",
		padding: 12,
		textAlign: "center"
	}
});

export default Button;
