import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/components/screens/Home';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AttractionDetails from './src/components/screens/AttractionDetails';
import Gallery from './src/components/screens/Gallery';

const Stack = createStackNavigator();

const App = () => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={AttractionDetails} name="AttractionDetails" />
        <Stack.Screen component={Gallery} name="Gallery" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
