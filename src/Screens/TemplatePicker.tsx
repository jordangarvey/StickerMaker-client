import React, { Fragment, PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import Categories from "../Components/TemplatePicker/Categories";

import TemplateItem from "../Components/TemplatePicker/TemplateItem";
import TemplateCategoriesContainer from "../Components/TemplatePicker/TemplateCategoriesContainer";
import TemplateOptionsContainer from "../Components/TemplatePicker/TemplateOptionsContainer";


/**
 * Interface for the Template Picker screen state
 */
interface ITemplatePickerState {
	/** The currently selected category */
	currentCategory?: Categories;
}

/**
 * Component to render the Template Picker screen
 */
class TemplatePicker extends PureComponent<any, ITemplatePickerState> {
	public constructor(props: any) {
		super(props);

		this.state = {};
	}

	/**
	 * Render the Template Picker screen
	 */
	public render() {
		return (
			<Fragment>
				<View style={styles.templateItemContainer}>
					<TemplateItem/>
				</View>

				<View style={styles.bottomContainer}>
					<TemplateCategoriesContainer currentCategory={this.state.currentCategory}/>
					<TemplateOptionsContainer/>
				</View>
			</Fragment>
		);
	}
}

/**
 * Styles for the Template Picker screen
 */
const styles = StyleSheet.create({
	bottomContainer: {
		bottom: 0,
		flexDirection: "column",
		justifyContent: "space-between",
		position: "absolute",
		width: "100%"
	},
	templateItemContainer: {
		alignSelf: "center",
		top: 200
	}
});

export default TemplatePicker;
