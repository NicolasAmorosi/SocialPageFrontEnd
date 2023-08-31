import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandPage from './src/views/LandPage';
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false, 
            tabBarStyle: { height: 70 },
            tabBarLabelStyle: { fontSize: 12, color: 'black' },
            tabBarIcon: () => {
              return <Ionicons name="ios-home-sharp" size={24} color="black" />
            }}}>
          <Tab.Screen name="LandPage" component={LandPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
