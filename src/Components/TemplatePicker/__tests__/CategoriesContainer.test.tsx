import React from "react";

import renderer from "react-test-renderer";

import CategoriesContainer from "../CategoriesContainer";


describe("The Categories Container component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<CategoriesContainer
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
