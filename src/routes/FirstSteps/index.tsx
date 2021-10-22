import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../../screens/Welcome';
import FirstStepsSchedules from '../../screens/FirstStepsSchedules';
import FirstStepsActivities from '../../screens/FirstStepsActivities';

const Stack = createNativeStackNavigator();

const Introduction: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName="Welcome"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen
				name="FirstStepsSchedules"
				component={FirstStepsSchedules}
			/>
			<Stack.Screen
				name="FirstStepsActivities"
				component={FirstStepsActivities}
			/>
		</Stack.Navigator>
	);
};

export default Introduction;
