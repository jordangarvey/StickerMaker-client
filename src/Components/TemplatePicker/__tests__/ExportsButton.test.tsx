import React from "react";

import renderer from "react-test-renderer";

import ExportsButton from "../ExportsButton";


describe("The Exports Button component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<ExportsButton/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
