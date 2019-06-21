import React, { SFC } from "react";
import { StyleSheet, View } from "react-native";


/**
 * Interface for the Tab Counter props
 */
interface ITemplateOptionsContainerProps {

}

/**
 * Component to render the Template Options Container
 */
const TemplateOptionsContainer: SFC<ITemplateOptionsContainerProps> = (props: ITemplateOptionsContainerProps) => (
	<View style={styles.templateOptionsContainer}/>
);

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
