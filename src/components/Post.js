import { Text, View, Image } from 'react-native'

export default function Post(){
  return(
    <View className=" h-auto w-screen bg-slate-500">
      <View className=" h-18 p-4 w-screen flex flex-row bg-slate-300 space-x-4 items-center">
        <Image className=" h-10 w-10 rounded-full" source={require('../../assets/profilePhoto.jpg')} />
        <Text className=" text-lg">Post</Text>
      </View>
      <Image className=" w-screen h-96" source={require('../../assets/post.jpg')} />
      <View className=" h-20 p-2 flex flex-col">
        <Text className=" text-lg ">Description</Text>
        <Text className=" text-base">Commment</Text>
      </View>
    </View>
  )
}
    
