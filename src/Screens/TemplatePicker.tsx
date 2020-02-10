import React, { useRef } from "react";
import { NativeModules, StyleSheet, View } from "react-native";

import ViewShot from "react-native-view-shot";

import { useAppContext } from "../State/AppContext";

import OptionButtonsContainer from "../Components/TemplatePicker/OptionButtonsContainer";
import ExportsButton from "../Components/Controls/ExportsButton";
import Header from "../Components/Layout/Header";
import OptionsContainer from "../Components/TemplatePicker/OptionsContainer";
import TemplateItem from "../Components/TemplatePicker/TemplateItem";

import * as C from "../Global/Colours";


/**
 * Component to render the Template Picker screen
 */
function TemplatePicker() {
	const [{ currentCategory }] = useAppContext();

	const templateItem = useRef<any>(null);

	async function capture() {
		let addBase64Image: string;
		try {
			addBase64Image = await templateItem.current!.capture();
		} catch(error) {
			// TODO: better error handling
			console.error(error);
			return;
		}

		NativeModules.BetterClipboard.addBase64Image(addBase64Image);
	}

	return (
		<View style={styles.fullWidthBackground}>
			<Header height={1}/>

			<View style={styles.templateItemContainer}>
				<ViewShot ref={templateItem} options={{ result: "base64" }}>
					<TemplateItem/>
				</ViewShot>
			</View>

			<View style={styles.bottomContainer}>
				{currentCategory && <OptionButtonsContainer/>}

				<View style={styles.bottomSolidContainer}>
					<OptionsContainer/>

					<ExportsButton onCopy={capture}/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomContainer: {
		flex: 4,
		flexDirection: "column",
		justifyContent: "flex-end",
		width: "100%"
	},
	bottomSolidContainer: {
		backgroundColor: "#FFFFFF",
		borderTopColor: "#000000",
		borderTopWidth: 0.5
	},
	fullWidthBackground: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: C.background,
		flexDirection: "column"
	},
	templateItemContainer: {
		alignItems: "center",
		alignSelf: "center",
		flex: 5,
		justifyContent: "center",
	}
});

export default TemplatePicker;
