import {StackNavigator,DrawerNavigator} from 'react-navigation';
import React,{Component} from 'react'
import MyTab from '../TAB';
import userProfile from '../userProfile'
import LoginForm from '../LoginForm'
import Register from '../Registration'
import StartPage from '../StartPage'
import Booking from '../Booking'
import Location from '../Location'
import logOut from '../logOut'
import theatre from '../theatre'



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
            screen:UserAppDrawer,
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
        }
    },
    {
        navigationOptions:{
            initialPage:'Start'
        }
    }
);
export default RootNavigation;