import React from "react";

import renderer from "react-test-renderer";

import Header from "../Header";


describe("The Header component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<Header/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
