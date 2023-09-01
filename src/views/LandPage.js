import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import Post from '../components/Post'
import TopBar from '../components/TopBar'

export default function LandPage() {

  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }]

  return (
    <SafeAreaView>
      <TopBar name="LandPage" />
      <ScrollView className=" h-auto w-screen flex flex-col">
        {posts.map((post) => (
          <Post key={post.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}