import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";

import { useAppContext } from "../../State/AppContext";

import * as C from "../../Global/Colours";


/**
 * Interface for the Option Button props
 */
interface IOptionButtonProps {
	/** The currently selected option this button belongs to e.g. shapes, text */
	option?: string;
	text?: string;
}

/**
 * The Option Button component has either of two functions:
 * * It will set a template value directly _i.e._ a shape
 * * It will set display a option picker instead of the category buttons _i.e._ the text colour picker
 */
const OptionButton: FC<IOptionButtonProps> = (props) => {
	const [{ currentOption }, dispatch] = useAppContext();

	function onPress() {
		dispatch({ payload: props.option, type: "updateOption" });

		if(!props.option) {
			dispatch({ payload: props.option, type: "updateCategory" });
		}
	}

	let icon: string | undefined;

	if(props.option) {
		switch(props.option) {
			case "colour":
				icon = "palette";
			break;

			case "outlineColour":
				icon = "brush";
			break;

			case "outlineSize":
				icon = "border-style";
			break;

			case "shadow":
				icon = "brightness-4";
			break;

			case "shape":
				icon = "crop-square";
			break;

			case "text":
				icon = "short-text";
			break;

			case "textColour":
				icon = "text-format";
			break;

			case "textSize":
				icon = "format-size";
			break;

			default:
				icon = "not-interested";
		}
	}

	const selected = props.option ? props.option === currentOption : undefined;

	return (
		<TouchableOpacity
			style={[
				styles.categoryButton,
				selected && { backgroundColor: C.primary }
			]}
			onPress={onPress}
		>
			<Icon
				color={selected ? C.textPrimary : C.textSecondary}
				name={icon || "not-interested"}
				iconStyle={styles.categoryButtonIcon}
				size={28}
				type="material"
			/>

			<Text
				style={[
					styles.categoryButtonText,
					{ color: selected ? C.textPrimary : C.textSecondary }
				]}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	categoryButton: {
		alignItems: "center",
		backgroundColor: C.secondary,
		borderRadius: 6,
		height: 80,
		flexDirection: "column",
		justifyContent: "space-around",
		marginHorizontal: 12,
		padding: 5,
		width: 60
	},
	categoryButtonIcon: {
		
	},
	categoryButtonText: {
		fontSize: 10,
		fontWeight: "bold"
	}
});

export default OptionButton;
