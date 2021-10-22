import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FirstSteps from './FirstSteps';

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<FirstSteps />
		</NavigationContainer>
	);
};

export default Routes;
