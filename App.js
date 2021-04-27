import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
// navigation related dependencies
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Detail from './screens/Detail';
import Feed from './screens/Feed';

import Screen1 from './screens/drawer/Screen1';
import Screen2 from './screens/drawer/Screen2';
import Screen3 from './screens/drawer/Screen3';

import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const App = () => {
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Bottom Tabs" component={createBottomTabs} />
        <Stack.Screen name="Top Tabs" component={createTopTabs} />
      </Stack.Navigator>
    );
  };

  const createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name="Tab1" component={Tab1} />
        <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Tab1" component={Tab1} />
        <BottomTabs.Screen name="Tab2" component={Tab2} />
        <BottomTabs.Screen name="Tab3" component={Tab3} />
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favourite" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
