import React,{Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '../Home/Home';
import Trending from '../Trending/Trending'
const MyTab = TabNavigator(
    {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (<Image
                    style={{ width: 25  , height: 25 }}
                    source={require('../Image/home-black-building-symbol.png')}/>);}
        }

    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (<Image
                    style={{ width: 25  , height: 25 }}
                    source={require('../Image/star.png')}/>);}
        }
    },
}, {

    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeBackgroundColor: '#e6bab4',
        showLabel: false
    },
});

export default MyTab;
