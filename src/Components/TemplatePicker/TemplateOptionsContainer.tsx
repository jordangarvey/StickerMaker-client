import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Categories from "./Categories";
import Shapes from "./Shapes";

import ColourPicker from "./OptionViews/ColourPicker";
import ExportsButton from "./ExportsButton";
import ShapePicker from "./OptionViews/ShapePicker";
import TextPicker from "./OptionViews/TextPicker";


/**
 * Interface for the Template Options Container props
 */
interface ITemplateOptionsContainerProps {
	currentCategory?: Categories;
	currentOption?: Shapes;
}

/**
 * Component to render the Template Options Container
 */
const TemplateOptionsContainer: FC<ITemplateOptionsContainerProps> = (props) => {
	let options: JSX.Element | null = null;

	switch(props.currentCategory) {
		case Categories.Colour:
				options = <ColourPicker currentOption={props.currentOption as any}/>;
			break;
		case Categories.Shape:
			options = <ShapePicker currentOption={props.currentOption as Shapes}/>;
			break;
		case Categories.Text:
				options = <TextPicker currentOption={props.currentOption as any}/>;
			break;
	}

	return (
		<View style={styles.templateOptionsContainer}>
			{options}

			<ExportsButton/>
		</View>
	);
};

/**
 * Styles for the Template Options Container
 */
const styles = StyleSheet.create({
	templateOptionsContainer: {
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderWidth: 0.5,
		height: 175,
		width: "100%"
	}
});

export default TemplateOptionsContainer;
