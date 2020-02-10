import React from "react";
import { StyleSheet, View } from "react-native";

import { useAppContext } from "../../State/AppContext";

import CategoriesButtonsContainer from "./CategoriesButtonsContainer";
import ColourPicker from "./OptionViews/ColourPicker";
import ShapePicker from "./OptionViews/ShapePicker";
import SizePicker from "./OptionViews/SizePicker";
import TextPicker from "./OptionViews/TextPicker";


/**
 * Component to render the Options Container
 */
function OptionsContainer() {
	const [{ currentOption }] = useAppContext();

	let optionsPicker: JSX.Element | null = null;

	switch(currentOption) {
		case "colour":
			optionsPicker = <ColourPicker value={currentOption}/>;
		break;

		case "outlineColour":
			optionsPicker = <ColourPicker value={currentOption}/>;
		break;

		case "outlineSize":
			optionsPicker = <SizePicker maxiumumValue={30} minimumValue={10} value={currentOption}/>
		break;

		case "shadow":
			optionsPicker = <SizePicker maxiumumValue={10} minimumValue={0} value={currentOption}/>
		break;

		case "shape":
			optionsPicker = <ShapePicker/>;
		break;

		case "text":
			optionsPicker = <TextPicker/>;
		break;

		case "textColour":
			optionsPicker = <ColourPicker value={currentOption}/>;
		break;

		case "textSize":
			optionsPicker = <SizePicker maxiumumValue={30} minimumValue={10} value={currentOption}/>
		break;

		default:
			optionsPicker = <CategoriesButtonsContainer/>
	}

	return (
		<View style={styles.optionsContainer}>{optionsPicker}</View>
	);
}

const styles = StyleSheet.create({
	optionsContainer: {
		width: "100%"
	}
});

export default OptionsContainer;
