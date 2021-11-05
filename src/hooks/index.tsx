import React from 'react';

import { SchedulesProvider } from './schedules';
import { ActivitiesProvider } from './activities';
import { SchedulesModalProvider } from './schedulesModal';
import { ActivitiesModalProvider } from './activitiesModal';

const HooksProvider: React.FC = ({ children }) => {
	return (
		<SchedulesProvider>
			<ActivitiesProvider>
				<SchedulesModalProvider>
					<ActivitiesModalProvider>{children}</ActivitiesModalProvider>
				</SchedulesModalProvider>
			</ActivitiesProvider>
		</SchedulesProvider>
	);
};

export default HooksProvider;
