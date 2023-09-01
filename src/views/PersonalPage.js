import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';

export default function PersonalPage(){
  return(
    <SafeAreaView className=" flex">
      <TopBar name="PersonalPage" />
      <View className=" flex flex-row space-x-4 w-screen h-auto p-4 items-center">
        <Image source={require('../../assets/profilePhoto.jpg')} className=" rounded-full h-20 w-20"/>
        <Text className=" text-xl">Nicolas Amorosi</Text>
      </View>
      <View className=" p-4 w-screen h-auto">
        <Text className=" text-xl">Description</Text>
      </View>
      <ScrollView className=" w-screen h-auto flex flex-wrap">
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
        <Image source={require('../../assets/post.jpg')} className=" w-32 h-32"/>
      </ScrollView>
    </SafeAreaView>
  )
}