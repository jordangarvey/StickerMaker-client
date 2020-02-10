import ICategory from "../Services/Models/ICategory";


interface ICategories {
	[key: string]: ICategory;
}

/**
 * Object defining the categories that a sticker can be edited by
 */
const categories: ICategories = {
	colour: {
		name: "Colour",
		options: {
			colour: "Colour"
		}
	},
	outline: {
		name: "Outline",
		options: {
			outlineColour: "Outline colour",
			outlineSize: "Outline size"
		}
	},
	shadow: {
		name: "Shadow",
		options: {
			shadow: "Shadow"
		}
	},
	shape: {
		name: "Shape",
		options: {
			shape: "Shape"
		}
	},
	text: {
		name: "Text",
		options: {
			text: "Text",
			textColour: "Text colour",
			textSize: "Text size"
		}
	}
};

export default categories;
