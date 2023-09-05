import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LandPage from '../views/LandPage';
import PersonalPage from '../views/PersonalPage';
import SearchPage from '../views/SearchPage';

const Tab = createBottomTabNavigator();

export default function NavBar() {
	return (
		<Tab.Navigator
		initialRouteName="LandPage"
		screenOptions={{
			tabBarActiveTintColor: '#00B9FF',
			headerShown: false,
			tabBarLabelStyle: { fontSize: 12 },
			tabBarItemStyle: { paddingTop: 10 },
		}}
		>
		<Tab.Screen
			name="LandPage"
			component={LandPage}
			options={{
			tabBarLabel: 'Home',
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="home" color={color} size={size} />
			),
			}}
		/>
		<Tab.Screen
			name="SearchPage"
			component={SearchPage}
			options={{
			tabBarLabel: 'Search',
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="magnify" color={color} size={size} />
			)
			}}
		/>
		<Tab.Screen
			name="PersonalPage"
			component={PersonalPage}
			options={{
			tabBarLabel: 'Profile',
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="account" color={color} size={size} />
			),
			}}
		/>
		</Tab.Navigator>
	);
}