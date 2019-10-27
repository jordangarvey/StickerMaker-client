interface ICategory {
	name: string;

	currentValue?: any;
	options?: { [key: string]: string };
	subcategories?: { [key: string]: ICategory; };
}

export default ICategory;
