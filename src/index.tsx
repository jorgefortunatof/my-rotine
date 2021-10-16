import React from 'react';
import { StatusBar } from 'react-native';

import Welcome from './screens/Welcome';

const App: React.FC = () => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Welcome />
		</>
	);
}

export default App;
