import React from "react";

import renderer from "react-test-renderer";

import Categories from "../Categories";
import Colours from "../Colours";
import OptionsContainer from "../OptionsContainer";
import Shapes from "../Shapes";


describe("The Options Container component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test");
		}

		const component = renderer.create(
			<OptionsContainer
				currentCategory={Categories.Colour}
				currentOptions={{
					colour: Colours.Grey1,
					shape: Shapes.Rect,
					text: "Test"
				}}
				onChange={mockFunction}
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
