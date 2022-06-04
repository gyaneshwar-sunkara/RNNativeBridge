import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import ScreenThree from './src/screens/ScreenThree';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName: string = '';
                  let iconSize: number = size;

                  if (route.name === 'One') {
                    if (Platform.OS === 'ios') {
                      iconName = 'logo-apple-appstore';
                    } else {
                      iconName = 'logo-android';
                    }
                  } else if (route.name === 'Two') {
                    iconName = 'logo-facebook';
                  } else if (route.name === 'Three') {
                    iconName = 'logo-react';
                  }

                  return (
                    <Ionicons name={iconName} size={iconSize} color={color} />
                  );
                },
                tabBarActiveTintColor: '#59bfff',
                tabBarInactiveTintColor: 'gray',
              })}>
              <Tab.Screen
                name="One"
                component={ScreenOne}
                options={{headerShown: false}}
              />
              <Tab.Screen
                name="Two"
                component={ScreenTwo}
                options={{headerShown: false}}
              />
              <Tab.Screen
                name="Three"
                component={ScreenThree}
                options={{headerShown: false}}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}
