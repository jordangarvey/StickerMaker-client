import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import shapes from "../../../Data/shapes";

import Shape from "./Shape";


/**
 * Component to render the Shape Picker
 */
const ShapePicker: FC = (props) => (
	<ScrollView contentContainerStyle={styles.shapePicker} horizontal={true}>
		{
			Object.keys(shapes).map(shape => (
				<Shape
					key={shape}
					shape={shape}
				/>
			))
		}
	</ScrollView>
);

const styles = StyleSheet.create({
	shapePicker: {
		alignItems: "center",
		height: "100%",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "flex-start"
	}
});

export default ShapePicker;
