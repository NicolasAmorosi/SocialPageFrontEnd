import 'react-native-gesture-handler'; 

import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import LandPage from '../Pages/LandPage';

const Stack = createStackNavigator();

export default function StackLandPage() {
  return (
		<Stack.Navigator
		initialRouteName="LandPage"
		screenOptions={{ headerShown: false }}>
			<Stack.Screen name="LandPage" component={LandPage} />
		</Stack.Navigator>
  	)
}
