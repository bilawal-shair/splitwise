import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='register' component= {RegisterScreen}  options={{
            headerShown: false,
          }}/>
        <Stack.Screen name='login' component= {LoginScreen}  options={{
            headerShown: false,
          }}/>
          <Stack.Screen name='home' component= {HomeScreen}  options={{
            headerShown: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
