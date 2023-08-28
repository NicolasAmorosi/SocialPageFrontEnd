import { SafeAreaView, Text, View } from 'react-native'
import Post from '../components/Post'

export default function LandPage() {
  return (
    <SafeAreaView>
      <View className=" h-20 bg-slate-400 justify-center p-4 shadow-lg">
        <Text className=" text-2xl text-black">SocialPage</Text>
      </View>
      <Post />
    </SafeAreaView>
  )
}