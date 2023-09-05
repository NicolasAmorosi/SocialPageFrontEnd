import { View, Text } from 'react-native';

export default function TopBar(Props) {
	return (
		<View className=" h-[60] justify-center p-[16] border-b-[2px] border-gray-300">
			<Text className=" text-xl text-black font-semibold">{Props.name}</Text>
		</View>
	)
}