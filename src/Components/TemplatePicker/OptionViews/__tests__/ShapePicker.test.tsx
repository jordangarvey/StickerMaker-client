import React from "react";

import renderer from "react-test-renderer";

import Shapes from "../../Shapes";

import ShapePicker from "../ShapePicker";


describe("The Shape Picker component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<ShapePicker
				currentShape={Shapes.Rect}
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
