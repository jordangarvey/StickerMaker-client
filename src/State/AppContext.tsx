import React, { createContext, useContext, useReducer } from "react";

import IAppContext from "./IAppContext";

import initialState from "./initialState";
import reducer, { IAction } from "./reducer";


type dispatch = (action: IAction) => void

// Create contexts for the state and dispatch
const StateContext = createContext<IAppContext | undefined>(undefined);
const DispatchContext = createContext<dispatch | undefined>(undefined);

// Create a provider that exposes the context value
export function AppContextProvider(props: { children?: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
}

/**
 * Returns just the current context value
 */
export function useContextState() {
	const context = useContext(StateContext);

	if(context === undefined) {
		throw new Error("useContextState must be used within a ContextProvider");
	}

	return context;
}


/**
 * Returns just the dispatch function to update the store
 */
export function useContextDispatch() {
	const context = useContext(DispatchContext);

	if(context === undefined) {
		throw new Error("useContextDispatch must be used within a ContextProvider");
	}

	return context;
}

/**
 * Returns both the current context value and the dispatch function to update the store
 */
export function useAppContext(): [IAppContext, dispatch] {
	return [useContextState(), useContextDispatch()];
}
