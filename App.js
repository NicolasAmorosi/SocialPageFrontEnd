import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavBar from './src/components/NavBar';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <NavBar/>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
