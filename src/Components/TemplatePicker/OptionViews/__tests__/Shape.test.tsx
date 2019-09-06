import React from "react";

import renderer from "react-test-renderer";

import Shapes from "../../Shapes";

import Colours from "../../Colours";
import Shape from "../Shape";


describe("The Shape component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<Shape
				onPress={mockFunction}
				shape={Shapes.Rect}
				selectedColour={Colours.Black}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
