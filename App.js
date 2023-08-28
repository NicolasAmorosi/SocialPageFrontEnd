import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandPage from './src/views/LandPage';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false, 
          tabBarStyle: { height: 50 },
          tabBarLabelStyle: { fontSize: 12, color: 'black' },
          tabBarIcon: () => {
            return <Ionicons name="ios-home-sharp" size={24} color="black" />
          }}}>
        <Tab.Screen name="LandPage" component={LandPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
