import React, { useEffect, useState } from "react";
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";

import colours from "../../Data/colours";
import { useAppContext } from "../../State/AppContext";


/**
 * Component to render a Template Item
 */
function TemplateItem() {
	const [{ currentOption, values }] = useAppContext();

	const [pan, setPan] = useState(new Animated.ValueXY());

		let val = { x:0, y:0 };
		pan.addListener((value) => val = value);
		// Initialize PanResponder with move handling
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (e, gesture) => true,
			onPanResponderMove: Animated.event([
				null, { dx: pan.x, dy: pan.y }
			])
			// adjusting delta value
		});

		pan.setValue({ x:0, y:0})

	let shape: object;

	switch(values.shape) {
		case "Capsule":
			shape = styles.capsule;
			break;
		case "Rectangle":
			shape = styles.rect;
			break;
		case "Square":
			shape = styles.square;
			break;
		default:
			throw new Error("Unknown shape");
	}

	const panStyle = {
		transform: pan.getTranslateTransform()
	}

	return (
		<View
			style={[
				{
					backgroundColor: colours[values.colour],
					borderColor: colours[values.outlineColour],
					borderWidth: values.outlineSize,
					shadowOpacity: values.shadow ? 0.5 : undefined,
					shadowColor: "black",
					shadowOffset: { height: values.shadow }
				},
				styles.item,
				shape
			]}
		>

			<Animated.Text
				{...panResponder.panHandlers}
				style={[
					panStyle,
					styles.text,
					{
						color: colours[values.textColour],
						fontSize: values.textSize
					},
					(currentOption === "textPlacement" && values.text?.length) ? styles.textDraggable : undefined
				]}
			>
				{values.text}
			</Animated.Text>
		</View>
	);
}

const styles = StyleSheet.create({
	capsule: {
		borderRadius: 50,
		height: 100,
		width: 200
	},
	item: {
		alignItems: "center",
		justifyContent: "center"
	},
	rect: {
		borderRadius: 6,
		height: 100,
		width: 200
	},
	square: {
		borderRadius: 6,
		height: 200,
		width: 200
	},
	text: {
		color: "white"
	},
	textDraggable: {
		borderColor: "red",
		borderStyle: "dashed",
		borderWidth: 1,
		padding: 10
	}
});

export default TemplateItem;
