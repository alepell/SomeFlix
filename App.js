import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Search from './src/screens/Search';
import Trending from './src/screens/Trending';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#161616',
            borderTopColor: 'rgba(255,255,255,0.3)',
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Trending} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
