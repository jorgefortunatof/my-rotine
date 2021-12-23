import React from 'react';
import { StatusBar } from 'react-native';

import HooksProvider from '../src/hooks';
import Routes from './routes';

const App: React.FC = () => {
	return (
		<HooksProvider>
			<StatusBar barStyle="light-content" />
			<Routes />
		</HooksProvider>
	);
};

export default App;
