import IAppContext from "./IAppContext";


export interface IAction {
	payload: any;
	type: "updateCategory" | "updateOption" | "updateValues";
}

const reducer = (state: IAppContext, action: IAction) => {
	switch(action.type) {
		case "updateCategory":
			return {
				...state,
				currentCategory: action.payload
			};

		case "updateOption":
			return {
				...state,
				currentOption: action.payload
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
