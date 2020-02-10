interface IAppContext {
	/** Key value pairs of option values */
	values: { [key: string]: any };

	/** The currently selected category, if any */
	currentCategory?: string;

	/** The currently selected option, if any */
	currentOption?: string;
}

export default IAppContext;
