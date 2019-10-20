import React from "react";

import renderer from "react-test-renderer";

import OptionsContainer from "../OptionsContainer";


describe("The Options Container component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<OptionsContainer/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
