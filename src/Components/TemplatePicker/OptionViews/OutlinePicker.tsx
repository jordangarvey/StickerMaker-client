import React from "react";
import { StyleSheet, View } from "react-native";

import ColourPicker from "./ColourPicker";
import SizePicker from "./SizePicker";


/**
 * Component to render the Outline Picker
 */
const OutlinePicker = () => {
	return (
		<View style={styles.outlinePicker}>
			<ColourPicker value="outlineColour"/>
			<SizePicker maxiumumValue={10} minimumValue={0} value="outlineSize"/>
		</View>
	);
}

const styles = StyleSheet.create({
	outlinePicker: {
		justifyContent: "center",
		height: "100%",
		paddingHorizontal: 15,
		paddingTop: 10,
		width: "100%"
	}
});

export default OutlinePicker;
