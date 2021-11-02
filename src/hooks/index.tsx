import React from 'react';

import { SchedulesProvider } from './schedules';
import { ActivitiesProvider } from './activities';
import { SchedulesModalProvider } from './schedulesModal';

const HooksProvider: React.FC = ({ children }) => {
	return (
		<SchedulesProvider>
			<ActivitiesProvider>
				<SchedulesModalProvider>{children}</SchedulesModalProvider>
			</ActivitiesProvider>
		</SchedulesProvider>
	);
};

export default HooksProvider;
