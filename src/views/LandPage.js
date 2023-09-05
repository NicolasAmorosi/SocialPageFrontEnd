import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import Post from '../components/Post'
import TopBar from '../components/TopBar'

export default function LandPage() {

  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]

  return (
    <SafeAreaView>
		<TopBar name="LandPage" />
		<ScrollView className=" w-[100%] flex flex-col">
			{posts.map((post) => (
			<Post key={post.id} />
			))}
		</ScrollView>
    </SafeAreaView>
  	)
}