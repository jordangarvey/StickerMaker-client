import React, { FC } from "react";
import { StyleSheet, View} from "react-native";

import * as C from "../../Global/Colours";


const Header: FC = () => <View style={styles.header}/>;

const styles = StyleSheet.create({
	header: {
		backgroundColor: C.secondary,
		borderColor: "#000000",
		borderWidth: 0.5,
		height: 100,
		width: "100%"
	}
});

export default Header;
