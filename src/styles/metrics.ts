import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export default {
	baseMargin: wp(6),
	basePadding: wp(4),
	borderRadius: wp(1),

	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
};
