import React from "react";

import renderer from "react-test-renderer";

import TextPicker from "../TextPicker";


describe("The Text Picker component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<TextPicker/>
		).toJSON();

		expect(component).toMatchSnapshot();
	});
});
