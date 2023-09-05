import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';

export default function PersonalPage() {
  return (
    <SafeAreaView className="">
      <TopBar name="PersonalPage" />


      <View className=" flex flex-row space-x-4 p-4 items-center">
        <Image source={require('../../assets/profilePhoto.jpg')} className=" rounded-full h-20 w-20 border-[2px] border-gray-300" />
        <Text className=" text-xl font-semibold">Nicolas Amorosi</Text>
      </View>
      <View className=" p-4">
        <Text className=" text-xl font-medium">Description</Text>
      </View>
      <ScrollView>
        <View className="flex-wrap flex-1 flex-row p-2 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
            <Image key={index} source={require('../../assets/post.jpg')} className=" w-[120] h-[120] rounded-md" />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}