import React, { Component } from "react";

import { AppContextProvider } from "./State/AppContext";
import initialState from "./State/initialState";
import reducer from "./State/reducer";
import RootNavigator from "./Config/RootNavigator";


class App extends Component {
	public render() {
		return (
			<AppContextProvider
				initialState={initialState}
				reducer={reducer}
			>
				<RootNavigator/>
			</AppContextProvider>
		);
	}
}

export default App;
