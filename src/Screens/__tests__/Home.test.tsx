import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import Home from "../Home";


describe("The Home component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<Home/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
