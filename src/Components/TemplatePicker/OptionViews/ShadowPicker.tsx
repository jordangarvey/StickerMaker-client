import React from "react";
import { StyleSheet, View } from "react-native";

import { Slider } from "react-native-elements";

import { useAppContext } from "../../../State/AppContext";


/**
 * Component to render the Shadow Picker
 */
function ShadowPicker() {
	const [{ values }, dispatch] = useAppContext();

	function onChange(value: number) {
		const newValues = values;
		newValues.shadow = value;

		dispatch({ payload: newValues, type: "updateValues" });
	}

	return (
		<View style={styles.shadowPicker}>
			<Slider
				onValueChange={onChange}
				minimumValue={0}
				maximumValue={10}
				value={values.shadow}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	shadowPicker: {
		justifyContent: "center",
		height: "100%",
		paddingHorizontal: 15,
		paddingTop: 10,
		width: "100%"
	}
});

export default ShadowPicker;
