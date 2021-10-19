/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import App from '../src/screens/Welcome';

describe('Welcome Screen', () => {
	it('Renders correctly', () => {
		const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;

		expect(tree.children?.length).toBe(2);
	});
});
