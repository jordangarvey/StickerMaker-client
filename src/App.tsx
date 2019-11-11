import React, { Component } from "react";

import { AppContextProvider } from "./State/AppContext";
import RootNavigator from "./Config/RootNavigator";


class App extends Component {
	public render() {
		return (
			<AppContextProvider>
				<RootNavigator/>
			</AppContextProvider>
		);
	}
}

export default App;
