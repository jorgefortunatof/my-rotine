import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container, ArrowUp, InnerCard, InnerTitle } from './styles';

const DayActivities: React.FC = () => {
	const [hided, setHided] = useState(true);

	const height = useSharedValue(hp(1));
	const animatedStyle = useAnimatedStyle(() => ({ height: height.value }));

	const handlePress = useCallback(() => {
		if (hided) {
			height.value = withTiming(hp(10));
			setHided(false);
		} else {
			height.value = withTiming(hp(1));
			setHided(true);
		}
	}, [height.value, hided]);

	return (
		<TouchableOpacity onPress={handlePress}>
			<Container style={animatedStyle}>
				<InnerCard>
					<InnerTitle>React Native</InnerTitle>
					<InnerTitle>20:00</InnerTitle>
				</InnerCard>
			</Container>
			<ArrowUp />
		</TouchableOpacity>
	);
};

export default DayActivities;
