import React from "react";
import renderer from "react-test-renderer";

import Categories from "../Categories";
import Shapes from "../Shapes";

import CategoryOption from "../CategoryOption";


describe("The Category Option component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<CategoryOption
				category={Categories.Shape}
				option={Shapes.Circle}
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
