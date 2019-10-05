import React from "react";

import renderer from "react-test-renderer";

import TextPicker from "../TextPicker";


describe("The Text Picker component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<TextPicker
				currentText="Test"
				onChange={mockFunction}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
