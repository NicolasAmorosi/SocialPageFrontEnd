import { View, Text } from 'react-native';

export default function TopBar(Props){
	return(
		<View className=" h-20 bg-slate-400 justify-center p-4 shadow-lg">
      <Text className=" text-2xl text-black">{Props.name}</Text>
    </View>
	)
}