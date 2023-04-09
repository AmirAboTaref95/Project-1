import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details';
const Stack = createStackNavigator();

const theme= {
  ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
        primary: '#000000',
        secondary: '#000000',
        accent: '#000000',
        error: '#ff0000',
    }
}

const App=()=> {
  const [fontsLoaded] = useFonts({
    // 'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
   InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOption={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App