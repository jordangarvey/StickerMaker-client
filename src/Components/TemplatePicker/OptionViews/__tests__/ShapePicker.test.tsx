import React from "react";

import renderer from "react-test-renderer";

import ShapePicker from "../ShapePicker";


describe("The Shape Picker component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<ShapePicker/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
