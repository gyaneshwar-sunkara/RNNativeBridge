import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import ScreenThree from './src/screens/ScreenThree';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
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
    </Provider>
  );
}
