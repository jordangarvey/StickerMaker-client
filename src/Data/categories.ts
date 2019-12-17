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
	outline: {
		name: "Outline",
		options: colours
	},
	shadow: {
		name: "Shadow"
	},
	shape: {
		name: "Shape",
		options: shapes
	},
	text: {
		name: "Text",
		subcategories: {
			textColour: {
				name: "Text colour",
				options: colours
			},
			textSize: {
				name: "Text size"
			}
		}
	}
};

export default categories;
