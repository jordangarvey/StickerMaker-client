interface IAppContext {
	/** Key value pairs of option values */
	values: { [key: string]: any };

	/** The currently selected category, if any */
	currentCategory?: string;
}

export default IAppContext;
