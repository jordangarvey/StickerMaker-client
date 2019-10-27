import React, { createContext, useContext, useReducer } from "react";

import IAppContext from "./IAppContext";


export const AppContext = createContext<IAppContext>(undefined as any);

export const AppContextProvider = (
	{ reducer, initialState, children }
) => (
	<AppContext.Provider
		value={useReducer(reducer, initialState)}
	>
			{children}
	</AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);
