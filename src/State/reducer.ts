import IAppContext from "./IAppContext";


interface IAction {
	type: "updateCategory" | "updateValues";
	[key: string]: string;
}

const reducer = (state: IAppContext, action: IAction) => {
	switch(action.type) {
		case "updateCategory":
			return {
				...state,
				category: action.newCategory
			}
		case "updateValues":
			return {
				...state,
				values: action.newValues
			}
		default:
			return state;
	}
}

export default reducer;
