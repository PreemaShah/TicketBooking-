import React,{Component} from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
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
                    style={{ width: responsiveWidth(7)  , height:responsiveHeight(4)}}
                    source={require('../Image/home-black-building-symbol.png')}/>);}
        }

    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (<Image
                    style={{ width: responsiveWidth(7)  , height:responsiveHeight(4) }}
                    source={require('../Image/star.png')}/>);}
        }
    },
}, {

    tabBarPosition: 'bottom',
        animationEnabled: true,
    tabBarOptions: {
        activeBackgroundColor: '#e6bab4',
        showLabel: false,

    },
});

export default MyTab;
