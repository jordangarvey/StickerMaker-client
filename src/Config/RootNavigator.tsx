import { createStackNavigator, createAppContainer } from "react-navigation";

import TemplatePicker from "../Screens/TemplatePicker";


/**
 * All pages in the app, and config options for the navigator
 * `initialRouteName` defines the entrance screen
 */
const RootNavigator = createStackNavigator(
	{
		TemplatePicker
	},
	{
		initialRouteName: "TemplatePicker",
		headerMode: "none",
		navigationOptions: {
			gesturesEnabled: false,
		}
	}
);

export default createAppContainer(RootNavigator);
