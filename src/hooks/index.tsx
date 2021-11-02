import React from 'react';

import { SchedulesProvider } from './schedules';
import { SchedulesModalProvider } from './schedulesModal';

const HooksProvider: React.FC = ({ children }) => {
	return (
		<SchedulesProvider>
			<SchedulesModalProvider>{children}</SchedulesModalProvider>
		</SchedulesProvider>
	);
};

export default HooksProvider;
