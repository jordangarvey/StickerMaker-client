import React from "react";

import { Slider } from "react-native-elements";

import { useAppContext } from "../../../State/AppContext";


function TextSizePicker() {
	const [{ values }, dispatch] = useAppContext();

	function onChange(value: number) {
		const newValues = values;
		newValues.textSize = value;

		dispatch({ payload: newValues, type: "updateValues" });
	}

	return (
		<Slider
			onValueChange={onChange}
			minimumValue={10}
			maximumValue={30}
			value={values.textSize}
		/>
	);
}

export default TextSizePicker;
