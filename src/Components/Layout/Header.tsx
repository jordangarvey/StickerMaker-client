import React, { FC } from "react";
import { StyleSheet, View} from "react-native";

import * as C from "../../Global/Colours";


const Header: FC = () => <View style={styles.header}/>;

const styles = StyleSheet.create({
	header: {
		backgroundColor: C.secondary,
		borderBottomColor: "#000000",
		borderBottomWidth: 0.5,
		height: 100,
		width: "100%"
	}
});

export default Header;
