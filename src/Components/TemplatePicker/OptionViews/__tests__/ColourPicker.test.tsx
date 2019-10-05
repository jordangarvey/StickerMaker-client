import React from "react";

import renderer from "react-test-renderer";

import Colours from "../../Colours";

import ColourPicker from "../ColourPicker";


describe("The Colour Picker component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<ColourPicker
				currentColour={Colours.Grey1}
				onPress={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
