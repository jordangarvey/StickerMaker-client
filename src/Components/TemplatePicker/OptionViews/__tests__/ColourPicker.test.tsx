import React from "react";

import renderer from "react-test-renderer";

import ColourPicker from "../ColourPicker";


describe("The Colour Picker component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<ColourPicker/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
