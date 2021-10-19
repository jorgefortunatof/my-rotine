import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Introduction from './Introduction';

const Routes: React.FC = () => {
	return (
		<NavigationContainer >
			<Introduction />
		</NavigationContainer>
	);
};

export default Routes;
