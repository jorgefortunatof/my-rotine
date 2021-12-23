import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/Home';
import { colors } from '../../styles';

const Drawer = createDrawerNavigator();

const Main: React.FC = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerTitle: '',
				headerTintColor: colors.lightest,
				headerStyle: {
					backgroundColor: colors.darker,
					shadowColor: colors.darker,
				},
				drawerStyle: {
					backgroundColor: colors.darker,
				},
				drawerActiveTintColor: colors.primary,
				drawerInactiveTintColor: colors.light,
			}}
			initialRouteName="Home"
		>
			<Drawer.Screen
				options={{ title: 'Inicio' }}
				name="Home"
				component={Home}
			/>
			<Drawer.Screen name="Atividades" component={Home} />
			<Drawer.Screen name="Horários Livres" component={Home} />
			<Drawer.Screen name="Calendário" component={Home} />
		</Drawer.Navigator>
	);
};

export default Main;
