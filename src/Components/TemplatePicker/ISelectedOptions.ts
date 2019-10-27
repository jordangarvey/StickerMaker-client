import Shapes from "../../Data/shapes";
import Colours from "../../Data/colours";


interface ISelectedOptions {
	/** The current colour of the item */
	colour: Colours;
	/** The current shape of the item */
	shape: Shapes;
	/** The current text of the item */
	text: string;
}

export default ISelectedOptions;
