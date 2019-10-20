import ICategory from "../Services/Models/ICategory";

import colours from "./colours";
import shapes from "./shapes";


interface ICategories {
	[key: string]: ICategory;
}

/**
 * Object defining the categories that a sticker can be edited by
 */
const categories: ICategories = {
	colour: {
		name: "Colour",
		options: colours
	},
	shape: {
		name: "Shape",
		options: shapes
	},
	text: {
		name: "Text",
		subcategories: {
			textColour: {
				name: "Text colour"
			},
			textSize: {
				name: "Text size"
			}
		}
	}
};

export default categories;
