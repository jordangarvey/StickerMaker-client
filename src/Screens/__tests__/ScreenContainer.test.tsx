import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import ScreenContainer from "../ScreenContainer";


describe("The Screen Container component’s snapshot", () => {
	it("renders as expected", () => {
		const component = renderer.create(
			<ScreenContainer
				children={<Text>Test</Text>}
			/>
		).toJSON();


		expect(component).toMatchSnapshot();
	});
});
