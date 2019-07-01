import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import Predictions from '../screens/Predictions'
import LeadersScreen from '../screens/LeadersScreen'
import StandingsScreen from '../screens/StandingsScreen'
import TeamDetailsScreen from '../screens/TeamDetailsScreen'

const HomeStack = createStackNavigator({
  Home: TeamDetailsScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  }
}

const PredictionsStack = createStackNavigator({
  Predictions
})

PredictionsStack.navigationOptions = {
  tabBarLabel: 'Predictions',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-basketball" />,
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  }
}

const LeadersStack = createStackNavigator({
  Leaders: LeadersScreen
})

LeadersStack.navigationOptions = {
  tabBarLabel: 'Leaders',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list-box" />,
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  }
}

const StandingsStack = createStackNavigator({
  Standings: StandingsScreen
})

StandingsStack.navigationOptions = {
  tabBarLabel: 'Standings',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-star" />,
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  }
}

export default createBottomTabNavigator({
  HomeStack,
  PredictionsStack,
  LeadersStack,
  StandingsStack
})
