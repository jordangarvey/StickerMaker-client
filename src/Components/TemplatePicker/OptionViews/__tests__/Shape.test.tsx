import React from "react";

import renderer from "react-test-renderer";

import Shape from "../Shape";


describe("The Shape component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<Shape
				shape="rect"
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
