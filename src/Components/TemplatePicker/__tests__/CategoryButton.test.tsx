import React from "react";

import renderer from "react-test-renderer";

import Categories from "../Categories";
import Shapes from "../Shapes";

import CategoryButton from "../CategoryButton";


describe("The Category Button component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<CategoryButton
				category={Categories.Shape}
				option={Shapes.Rect}
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
