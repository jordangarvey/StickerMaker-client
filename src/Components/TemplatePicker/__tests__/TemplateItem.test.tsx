import React from "react";
import renderer from "react-test-renderer";

import TemplateItem from "../TemplateItem";


describe("The Template Item component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<TemplateItem/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
