import React from "react";
import renderer from "react-test-renderer";

import TemplateCategoriesContainer from "../TemplateCategoriesContainer";


describe("The Template Categories Container component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<TemplateCategoriesContainer
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
