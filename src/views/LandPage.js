import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import Post from '../components/Post'

export default function LandPage() {

  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }]

  return (
    <SafeAreaView>
      <View className=" h-20 bg-slate-400 justify-center p-4 shadow-lg">
        <Text className=" text-2xl text-black">SocialPage</Text>
      </View>
      <ScrollView className=" h-auto w-screen flex flex-col">
        {posts.map((post) => (
          <Post key={post.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}