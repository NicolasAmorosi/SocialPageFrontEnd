import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandPage from './src/views/LandPage';
import PersonalPage from './src/views/PersonalPage';

import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false, 
            tabBarStyle: { height: 80 },
            tabBarLabelStyle: { fontSize: 12, color: 'black' },
            }}>
          <Tab.Screen options={{tabBarIcon: () => {
              return <Ionicons  name="ios-home-sharp" size={24} color="black" />
            }}} 
            name="LandPage" 
            component={LandPage} />
          <Tab.Screen options={{tabBarIcon: () => {
              return <FontAwesome name="user" size={24} color="black" />
            }}} 
            name="PersonalPage" 
            component={PersonalPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
