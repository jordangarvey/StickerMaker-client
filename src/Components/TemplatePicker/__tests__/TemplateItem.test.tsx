import React from "react";

import renderer from "react-test-renderer";

import TemplateItem from "../TemplateItem";
import Colours from "../Colours";
import Shapes from "../Shapes";


describe("The Template Item component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<TemplateItem
				colour={Colours.Black}
				shape={Shapes.Rect}
				text="Mock item"
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
