import React from "react";
import { StyleSheet, View } from "react-native";

import { Slider } from "react-native-elements";

import { useAppContext } from "../../../State/AppContext";



interface ISizePickerProps {
	maxiumumValue: number;
	minimumValue: number;
	/** The state value to use */
	value: string;
}

function SizePicker(props: ISizePickerProps) {
	const [{ values }, dispatch] = useAppContext();

	function onChange(value: number) {
		const newValues = values;
		newValues[props.value] = value;

		dispatch({ payload: newValues, type: "updateValues" });
	}

	return (
		<View style={styles.sizePicker}>
			<Slider
				onValueChange={onChange}
				maximumValue={props.maxiumumValue}
				minimumValue={props.minimumValue}
				value={values[props.value]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	sizePicker: {
		justifyContent: "center",
		height: "100%",
		paddingHorizontal: 15,
		paddingTop: 10,
		width: "100%"
	}
});

export default SizePicker;
