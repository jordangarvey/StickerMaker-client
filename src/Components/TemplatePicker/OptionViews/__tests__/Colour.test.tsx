import React from "react";

import renderer from "react-test-renderer";

import Colour from "../Colour";


describe("The Colour component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test")
		}

		const component = renderer.create(
			<Colour
				colour="Grey1"
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
