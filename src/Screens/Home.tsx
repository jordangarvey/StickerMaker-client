import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import ScreenContainer from "./ScreenContainer";
import Button from "../Components/Controls/Button";


/**
 * Component to render the Home screen
 */
class Home extends PureComponent<NavigationScreenProp<null>> {
	public constructor(props: any) {
		super(props);

		this.navigateToTemplatePicker = this.navigateToTemplatePicker.bind(this);
	}

	private navigateToTemplatePicker() {
		this.props.navigation.navigate("TemplatePicker");
	}

	/**
	 * Render the Home screen
	 */
	public render() {
		return (
			<ScreenContainer>
				<Button onPress={this.navigateToTemplatePicker}>Create a sticker</Button>
			</ScreenContainer>
		);
	}
}

/**
 * Styles for the Home screen
 */
const styles = StyleSheet.create({

});

export default Home;
