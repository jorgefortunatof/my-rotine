import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';

const Stack = createNativeStackNavigator();

const Introduction: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Welcome" component={Welcome} />
		</Stack.Navigator>
	);
}

export default Introduction;

