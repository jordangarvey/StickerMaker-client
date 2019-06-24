import React, { Component, SFC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import * as C from "../Global/Colours";


/**
 * Component to render the screen container
 */
const ScreenContainer: SFC<Component> = (props) => (
	<ScrollView
		alwaysBounceVertical={ false }
		indicatorStyle="black"
		keyboardDismissMode="interactive"
		style={styles.screen}
	>
		{props.children}
	</ScrollView>
);

/**
 * Styles for the login screen
 */
const styles = StyleSheet.create({
	screen: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: C.background,
		paddingTop: 50,
		paddingHorizontal: 40
	}
});

export default ScreenContainer;
