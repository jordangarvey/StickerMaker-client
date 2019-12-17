import IAppContext from "./IAppContext";


export interface IAction {
	payload: any;
	type: "updateCategory" | "updateValues";
}

const reducer = (state: IAppContext, action: IAction) => {
	switch(action.type) {
		case "updateCategory":
			return {
				...state,
				currentCategory: action.payload
			};

		case "updateValues":
			return {
				...state,
				values: action.payload
			};

		default:
			return state;
	}
}

export default reducer;
