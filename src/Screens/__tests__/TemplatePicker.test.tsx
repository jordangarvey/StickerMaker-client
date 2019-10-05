import React from "react";

import renderer from "react-test-renderer";

import TemplatePicker from "../TemplatePicker";


describe("The Template Picker component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<TemplatePicker/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
