import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import FirstSteps from './FirstSteps';
import Main from './Main';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{ headerShown: false }}
					initialRouteName="FirstSteps"
				>
					<Stack.Screen name="FirstSteps" component={FirstSteps} />
					<Stack.Screen name="Main" component={Main} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default Routes;
