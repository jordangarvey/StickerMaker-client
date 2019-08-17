import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationScreenProps } from "react-navigation";

import Button from "../Components/Controls/Button";


/**
 * Component to render the Home screen
 */
class Home extends PureComponent<NavigationScreenProps> {
	public constructor(props: any) {
		super(props);

		this.navigateToTemplatePicker = this.navigateToTemplatePicker.bind(this);
	}

	private navigateToTemplatePicker() {
		this.props.navigation.navigate("TemplatePicker");
	}

	public render() {
		return (
			<View style={styles.container}>
				<Button onPress={this.navigateToTemplatePicker}>Create a sticker</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50
	}
});

export default Home;
