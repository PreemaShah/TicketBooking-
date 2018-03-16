import {StackNavigator,DrawerNavigator} from 'react-navigation';
import React,{Component} from 'react';
import {View,TouchableOpacity,Image,Text} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import LoginForm from '../LoginForm'
import Register from '../Registration'
import Booking from '../Booking'
import theatre from '../theatre'
import MyTab from '../TAB';
import userProfile from '../userProfile'
import Location from '../Location'
import logOut from '../logOut'
import SplashScreen from '../SplashScreen'
import ReleasedMovie from '../releasedMovie'

const NavDrawer = DrawerNavigator({
        Home: { screen: MyTab },
        Location:{screen:Location},
        LogOut:{screen:logOut},
        Profile:{screen:userProfile}

    },
    {
        navigationOptions:({navigation})=>({
            headerLeft : <View style={{paddingLeft:responsiveWidth(0.7)}}>
                <TouchableOpacity onPress={()=> navigation.navigate("DrawerOpen")}>
                    <Image source={require('../../Image/list-menu.png')}
                           style={{height:responsiveHeight(4), width:responsiveWidth(8)}} />
                </TouchableOpacity>
            </View>
        })
    });
const NavScreen=StackNavigator({

    initialPage:{
        screen:SplashScreen,
        navigationOptions:({navigation})=>({
            header:null
        })
    },
        Login:{
            screen:LoginForm
        },

        Home:{
            screen:NavDrawer,
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
    }
);
export default NavScreen;