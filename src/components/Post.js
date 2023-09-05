import { Text, View, Image } from 'react-native'

export default function Post(){
  return(
    <View className=" rounded-lg m-[10] border-[2px] border-gray-300">
		<View className=" p-[16] flex flex-row space-x-[16] items-center rounded-t-lg">
			<Image className=" h-[40] w-[40] rounded-full" source={require('../../assets/profilePhoto.jpg')} />
			<Text className=" text-lg font-semibold">Post</Text>
		</View>
		<Image className=" w-[100%] h-[400]" source={require('../../assets/post.jpg')} />
		<View className=" p-[8] flex flex-col">
			<Text className=" text-lg font-medium">Description</Text>
			<Text className=" text-base font-medium">Commment</Text>
		</View>
    </View>
  	)
}
    
``