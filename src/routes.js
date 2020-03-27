/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
import * as React from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './scenes/Login/index';
import Home from './scenes/Home/index';
import Subject from './scenes/Subject/index';
import ClosedQuestions from './scenes/ClosedQuestions';
import Alternatives from './scenes/Alternatives';
import { PRIMARY, WHITE } from './styles/colors';

const AuthStack = createStackNavigator();
const General = createStackNavigator();
const PublicStack = createStackNavigator();
const DrawerHomeStack = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

const SubjectStackScreen = () => (
  <General.Navigator initialRouteName="Subject">
    <General.Screen
      options={{
        headerShown: false,
      }}
      name="Subject"
      component={Subject}
    />
    <General.Screen
      options={{
        headerShown: false,
      }}
      name="ClosedQuestions"
      component={ClosedQuestions}
    />
    <General.Screen
      options={{
        headerShown: true,
        headerStyle: { backgroundColor: PRIMARY },
        headerTintColor: WHITE,
      }}
      name="Alternatives"
      component={Alternatives}
    />
  </General.Navigator>
);

const DrawerHomeScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen
      options={{
        title: 'Home 2',
      }}
      name="Home2"
      component={Home}
    />
  </Tab.Navigator>
);

const PublicScreen = () => (
  <PublicStack.Navigator initialRouteName="Login">
    <PublicStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
  </PublicStack.Navigator>
);

export default () => {
  return signedIn => {
    return (
      <NavigationContainer headerMode="screen">
        {signedIn ? (
          <DrawerHomeStack.Navigator initialRouteName="Home">
            <DrawerHomeStack.Screen name="Home" component={DrawerHomeScreen} />
            <DrawerHomeStack.Screen
              name="Assuntos"
              component={SubjectStackScreen}
            />
          </DrawerHomeStack.Navigator>
        ) : (
          <PublicScreen />
        )}
      </NavigationContainer>
    );
  };
};
