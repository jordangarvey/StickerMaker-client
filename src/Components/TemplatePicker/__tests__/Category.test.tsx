import React from "react";
import renderer from "react-test-renderer";

import Categories from "../Categories";

import Category from "../Category";


describe("The Category component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<Category
				category={Categories.Colour}
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
