import React from "react";

import renderer from "react-test-renderer";

import Button from "../Button";


describe("The Button component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<Button
				onPress={mockFunction}
				text="Test"
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
