import React from "react";

import renderer from "react-test-renderer";

import Input from "../Input";


describe("The Inputcomponent’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<Input
				onChange={mockFunction}
				value="Test"
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
