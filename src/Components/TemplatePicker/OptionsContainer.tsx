import React from "react";
import { StyleSheet, View } from "react-native";

import { useAppContext } from "../../State/AppContext";

import ColourPicker from "./OptionViews/ColourPicker";
import OutlinePicker from "./OptionViews/OutlinePicker";
import ShadowPicker from "./OptionViews/ShadowPicker";
import ShapePicker from "./OptionViews/ShapePicker";
import TextPicker from "./OptionViews/TextPicker";


/**
 * Component to render the Options Container
 */
function OptionsContainer() {
	const [{ currentCategory }] = useAppContext();

	let optionsPicker: JSX.Element | null = null;

	switch(currentCategory) {
		case "colour":
			optionsPicker = <ColourPicker value="colour"/>;
		break;

		case "outline":
			optionsPicker = <OutlinePicker/>;
		break;

		case "shadow":
				optionsPicker = <ShadowPicker/>;
		break;

		case "shape":
			optionsPicker = <ShapePicker/>;
		break;

		case "text":
			optionsPicker = <TextPicker/>;
		break;
	}

	return (
		<View style={styles.optionsContainer}>{optionsPicker}</View>
	);
}

const styles = StyleSheet.create({
	optionsContainer: { 
		height: 160,
		width: "100%"
	}
});

export default OptionsContainer;
