import React from "react";

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
		<Slider
			onValueChange={onChange}
			maximumValue={props.maxiumumValue}
			minimumValue={props.minimumValue}
			value={values[props.value]}
		/>
	);
}

export default SizePicker;
