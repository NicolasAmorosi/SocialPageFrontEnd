import { Text, View, Image } from 'react-native'

export default function Post(){
  return(
    <View className=" rounded-lg m-[10] border-[2px] border-gray-300">
		<View className=" p-[10] flex flex-row space-x-[10] items-center rounded-t-lg">
			<Image className=" h-[40] w-[40] rounded-full" source={require('../../assets/profilePhoto.jpg')} />
			<Text className=" text-lg ">Post</Text>
		</View>
		<View className=" px-[10]">
			<Image className=" w-[100%] h-[400] rounded-lg" source={require('../../assets/post.jpg')} />
		</View>
		<View className=" p-[8] flex flex-col">
			<Text className=" text-lg ">Description</Text>
			<Text className=" text-base ">Commment</Text>
		</View>
    </View>
  	)
}
    