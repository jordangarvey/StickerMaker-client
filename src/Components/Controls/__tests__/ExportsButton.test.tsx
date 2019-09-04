import React from "react";

import renderer from "react-test-renderer";

import ExportsButton from "../ExportsButton";


describe("The Exports Button component’s snapshot", () => {
	it("renders as expected", () => {
		function mockFunction() {
			console.log("Test");
		}

		const component = renderer.create(
			<ExportsButton onCopy={mockFunction}/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
