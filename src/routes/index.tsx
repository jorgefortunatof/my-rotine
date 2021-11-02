import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FirstSteps from './FirstSteps';
import HooksProvider from '../hooks';

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<HooksProvider>
				<FirstSteps />
			</HooksProvider>
		</NavigationContainer>
	);
};

export default Routes;
