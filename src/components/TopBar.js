import { View, Text } from 'react-native';

import { Shadow } from 'react-native-shadow-2';

export default function TopBar(Props) {
	return (
		<Shadow 
			distance={5}
			startColor={'#00000010'}
			radius={8}
			sides={{ top: false }}>
			<View className=" h-[60] w-screen justify-center p-[16]">
				<Text className=" text-xl text-black ">{Props.name}</Text>
			</View>
		</Shadow>
	)
}
