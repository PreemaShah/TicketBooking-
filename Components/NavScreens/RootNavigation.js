import {StackNavigator,DrawerNavigator} from 'react-navigation';
import React,{Component} from 'react';
import {View,Text} from 'react-native'
import MyTab from '../TAB';
import userProfile from '../userProfile'
import LoginForm from '../LoginForm'
import Register from '../Registration'
import StartPage from '../StartPage'
import Booking from '../Booking'
import Location from '../Location'
import logOut from '../logOut'
import theatre from '../theatre'
import navScreen from '../NavScreens/NavScreen'
import SkipNavScreen from'../NavScreens/SkipNavScreen'
import ReleasedMovie from '../releasedMovie'
const RootNavigation=StackNavigator({

        Start:{
            screen:StartPage,
            navigationOptions:({navigation})=>({
                header:null
            })
        },
        Login:{
            screen:LoginForm
        },

        Home:{
            screen:global.home?navScreen:SkipNavScreen,
        },

        Registration:{
            screen:Register
        },
        Booking:{
            screen:Booking
        },
        Theatre:{
            screen:theatre
        },
        Location:{
            screen:Location
        },
        ReleasedMovie: {
            screen:ReleasedMovie
        }
    },
    {
        navigationOptions:{
            initialPage:'Start'
        }
    }
);
export default RootNavigation;