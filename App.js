import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SettingsScreen from './screens/Settings';
import AuthContextProvider , {AuthContext} from './store/auth-context';
import { useContext , useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import IconButton from './components/ui/IconButton';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>

    
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nari Shakti" component={WelcomeScreen} options={{
       headerShown: false,
      }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{}}/>
    </Stack.Navigator>
  );
}

function Navigation() {
   const authCtx = useContext(AuthContext);
  return ( 
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack/>}
      {authCtx.isAuthenticated && <AuthenticatedStack/>}
    </NavigationContainer>
    
  );
}

function Root(){
  const[isTryingLogin , setisTryingLogin]=useState(true) 
   const authCtx = useContext(AuthContext);
  useEffect(()=>{
    async function fetchToken(){
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken){
            authCtx.authenticate(storedToken);
        }
        setisTryingLogin(false);
    }
    fetchToken();
},[]);
   if(isTryingLogin){
    return <AppLoading />
   }
 return  <Navigation/>
}

export default function App() {



    const[fontsLoaded]= useFonts({
        'oleo-bold':require('./assets/fonts/OleoScriptSwashCaps-Bold.ttf'),
        'oleo-regular':require('./assets/fonts/OleoScriptSwashCaps-Regular.ttf'),
    });
      return (
    <>
      <StatusBar style="light" />
       <AuthContextProvider >
        <Root />
      </AuthContextProvider>
     
    </>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
   
  },
  backgroundImage:{
    opacity:0.25
  }
});
