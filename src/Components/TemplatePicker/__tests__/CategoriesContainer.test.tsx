import React from "react";

import renderer from "react-test-renderer";

import CategoriesContainer from "../CategoriesContainer";


describe("The Categories Container component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<CategoriesContainer/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
