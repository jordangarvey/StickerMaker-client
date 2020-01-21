import React, { Component } from "react";
import { NativeModules, StyleSheet, View } from "react-native";

import ViewShot from "react-native-view-shot";

import CategoriesContainer from "../Components/TemplatePicker/CategoriesContainer";
import ExportsButton from "../Components/Controls/ExportsButton";
import Header from "../Components/Layout/Header";
import OptionsContainer from "../Components/TemplatePicker/OptionsContainer";
import TemplateItem from "../Components/TemplatePicker/TemplateItem";

import * as C from "../Global/Colours";


/**
 * Interface for the Template Picker screen state
 */
interface ITemplatePickerState {
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
		this.state = {};

		// Bind this component’s methods
		this.capture = this.capture.bind(this);
	}

	private async capture() {
		let addBase64Image: string;
		try {
			addBase64Image = await this.refs.templateItem.capture();
		} catch(error) {
			console.error(error);
			this.setState({ error });
			return;
		}

		NativeModules.BetterClipboard.addBase64Image(addBase64Image);
	}

	public render() {
		return (
			<View style={styles.fullWidthBackground}>
				<Header/>

				<View style={styles.templateItemContainer}>
					<ViewShot ref="templateItem" options={{ result: "base64" }}>
						<TemplateItem/>
					</ViewShot>
				</View>

				<View style={styles.bottomContainer}>
					<CategoriesContainer/>

					<View style={styles.bottomSolidContainer}>
						<OptionsContainer/>
						<ExportsButton onCopy={this.capture}/>
					</View>
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
	bottomSolidContainer: {
		backgroundColor: "#FFFFFF",
		borderTopColor: "#000000",
		borderTopWidth: 0.5
	},
	fullWidthBackground: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: C.background
	},
	templateItemContainer: {
		alignItems: "center",
		alignSelf: "center",
		bottom: 295,
		justifyContent: "center",
		top: 100
	}
});

export default TemplatePicker;
