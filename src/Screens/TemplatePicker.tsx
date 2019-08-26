import React, { Component } from "react";
import { NativeModules, StyleSheet, View } from "react-native";

import ViewShot from "react-native-view-shot";

import Categories from "../Components/TemplatePicker/Categories";
import Colours from "../Components/TemplatePicker/Colours";
import Shapes from "../Components/TemplatePicker/Shapes";

import ISelectedOptions from "../Components/TemplatePicker/ISelectedOptions";

import TemplateItem from "../Components/TemplatePicker/TemplateItem";
import CategoriesContainer from "../Components/TemplatePicker/CategoriesContainer";
import OptionsContainer from "../Components/TemplatePicker/OptionsContainer";

import * as C from "../Global/Colours";


/**
 * Interface for the Template Picker screen state
 */
interface ITemplatePickerState {
	/** The currently selected options */
	currentOptions: ISelectedOptions;

	/** The currently selected category, if any */
	currentCategory?: Categories;
	/** Optional error that’s thrown from the component */
	error?: Error;
}

/**
 * Component to render the Template Picker screen
 */
class TemplatePicker extends Component<any, ITemplatePickerState> {
	public constructor(props: any) {
		super(props);

		// Intitialise the state
		this.state = {
			currentOptions: {
				colour: Colours.Black,
				shape: Shapes.Rect,
				text: ""
			}
		};

		// Bind this component’s methods
		this.capture = this.capture.bind(this);
		this.onCategoryButtonPress = this.onCategoryButtonPress.bind(this);
		this.onTextValueChange = this.onTextValueChange.bind(this);
		this.onOptionButtonPress = this.onOptionButtonPress.bind(this);
	}

	private async capture() {
		let addBase64Image: string;
		try {
			base64Image = await this.refs.templateItem.capture();
		} catch(error) {
			console.error(error);
			this.setState({ error });
			return;
		}

		NativeModules.BetterClipboard.addBase64Image(addBase64Image);
	}
	
	/**
	 * Method to be fired whenever a category button is pressed
	 */
	private onCategoryButtonPress(category: Categories) {
		const currentCategory = this.state.currentCategory !== category ? category : undefined;
		this.setState({ currentCategory });
	}

	/**
	 * Method to be fired whenever an option button is pressed
	 */
	private onOptionButtonPress(category: Categories, option: Colours | Shapes) {
		const currentOptions = this.state.currentOptions;
		switch(category) {
			case Categories.Colour:
				currentOptions.colour = option as Colours;
				break;
			case Categories.Shape:
				currentOptions.shape = option as Shapes;
				break;
		}

		this.setState({ currentOptions });
	}

	/**
	 * Method to be fired whenever the text value is changed
	 */
	private onTextValueChange(text: string) {
		const currentOptions = this.state.currentOptions;
		currentOptions.text = text;

		this.setState({ currentOptions });
	}

	public render() {
		return (
			<View style={styles.fullWidthBackground}>
				<View style={styles.templateItemContainer}>
					<ViewShot ref="templateItem" options={{ result: "base64" }}>
						<TemplateItem
							colour={this.state.currentOptions.colour}
							shape={this.state.currentOptions.shape}
							text={this.state.currentOptions.text}
						/>
					</ViewShot>
				</View>

				<View style={styles.bottomContainer}>
					<CategoriesContainer
						currentCategory={this.state.currentCategory}
						onPress={this.onCategoryButtonPress}
					/>
					<OptionsContainer
						currentCategory={this.state.currentCategory}
						currentOptions={this.state.currentOptions}
						onCapture={this.capture}
						onChange={this.onTextValueChange}
						onPress={this.onOptionButtonPress}
					/>
				</View>
			</View>
		);
	}
}

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
