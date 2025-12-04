import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BlouseListScreen from './screens/BlouseListScreen';
import BlouseFormScreen from './screens/BlouseFormScreen';
import PicoListScreen from './screens/PicoListScreen';
import PicoFormScreen from './screens/PicoFormScreen';
import SareeListScreen from './screens/SareeListScreen';
import SareeFormScreen from './screens/SareeFormScreen';
import ChuridarFormScreen from './screens/ChuridarFormScreen';
import LehengaFormScreen from './screens/LehengaFormScreen';
import BillingScreen from './screens/BillingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BlouseList" component={BlouseListScreen} />
          <Stack.Screen name="BlouseForm" component={BlouseFormScreen} />
          <Stack.Screen name="PicoList" component={PicoListScreen} />
          <Stack.Screen name="PicoForm" component={PicoFormScreen} />
          <Stack.Screen name="SareeList" component={SareeListScreen} />
          <Stack.Screen name="SareeForm" component={SareeFormScreen} />
          <Stack.Screen name="ChuridarForm" component={ChuridarFormScreen} />
          <Stack.Screen name="LehengaForm" component={LehengaFormScreen} />
          <Stack.Screen name="Billing" component={BillingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
