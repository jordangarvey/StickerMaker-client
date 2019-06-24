import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import Categories from "../Components/TemplatePicker/Categories";
import Shapes from "../Components/TemplatePicker/Shapes";

import TemplateItem from "../Components/TemplatePicker/TemplateItem";
import TemplateCategoriesContainer from "../Components/TemplatePicker/TemplateCategoriesContainer";
import TemplateOptionsContainer from "../Components/TemplatePicker/TemplateOptionsContainer";

import * as C from "../Global/Colours";


/**
 * Interface for the Template Picker screen state
 */
interface ITemplatePickerState {
	/** The current shape of the sticker */
	shape?: Shapes;
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

		// Bind this component’s methods
		this.onCategoryOptionPress = this.onCategoryOptionPress.bind(this);
	}

	private onCategoryOptionPress(category: Categories) {
		const currentCategory = this.state.currentCategory !== category ? category : undefined;
		this.setState({ currentCategory });
	}

	/**
	 * Render the Template Picker screen
	 */
	public render() {
		return (
			<View style={styles.fullWidthBackground}>
				<View style={styles.templateItemContainer}>
					<TemplateItem shape={this.state.shape || Shapes.Rect}/>
				</View>

				<View style={styles.bottomContainer}>
					<TemplateCategoriesContainer
						currentCategory={this.state.currentCategory}
						onPress={this.onCategoryOptionPress}
					/>
					<TemplateOptionsContainer
						currentCategory={this.state.currentCategory}
					/>
				</View>
			</View>
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
	fullWidthBackground: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: C.background
	},
	templateItemContainer: {
		alignSelf: "center",
		top: 200
	}
});

export default TemplatePicker;
