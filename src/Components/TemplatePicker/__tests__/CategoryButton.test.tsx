import React from "react";

import renderer from "react-test-renderer";ies";

import CategoryButton from "../CategoryButton";


describe("The Category Button component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<CategoryButton
				category="shape"
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
