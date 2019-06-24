import React from "react";
import renderer from "react-test-renderer";

import TemplateOptionsContainer from "../TemplateOptionsContainer";


describe("The Template Options Container component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<TemplateOptionsContainer/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
