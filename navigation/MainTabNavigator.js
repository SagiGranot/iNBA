import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LeadersScreen from '../screens/LeadersScreen';
import StandingsScreen from '../screens/StandingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Odds',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-basketball'
    />
  ),
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  }
};

const LeadersStack = createStackNavigator({
  Leaders: LeadersScreen,
});

LeadersStack.navigationOptions = {
  tabBarLabel: 'Leaders',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-list-box'
    />
  ),
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  }
};

const StandingsStack = createStackNavigator({
  Standings: StandingsScreen,
});

StandingsStack.navigationOptions = {
  tabBarLabel: 'Standings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-star'
    />
  ),
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  }
};


export default createBottomTabNavigator({
  HomeStack,
  LeadersStack,
  StandingsStack
});
