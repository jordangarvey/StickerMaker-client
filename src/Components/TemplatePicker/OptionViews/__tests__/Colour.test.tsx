import React from "react";

import renderer from "react-test-renderer";

import Colours from "../../Colours";

import Colour from "../Colour";


describe("The Colour component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<Colour
				onPress={mockFunction}
				colour={Colours.Grey1}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
