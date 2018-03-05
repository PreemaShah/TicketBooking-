import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {View,TouchableOpacity,Image} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import React from 'react'
import MyTab from './TAB';
import userProfile from './userProfile'
import LoginForm from './LoginForm'
import Register from './Registration'
import StartPage from './StartPage'
import Booking from './Booking'
import Location from './Location'
import logOut from './logOut'
import theatre from './theatre'

const AppDrawer = DrawerNavigator({
    Home: { screen: MyTab },
    Location:{screen:Location},
    LogOut:{screen:logOut},
    Profile:{screen:userProfile}

},
    {
        navigationOptions:({navigation})=>({
            headerLeft : <View>
                <TouchableOpacity onPress={()=> navigation.navigate("DrawerOpen")}>
                    <Image source={require('./../Image/list-menu.png')} style={{height:responsiveHeight(4), width:responsiveWidth(8)}} />
                </TouchableOpacity>
            </View>
        })
    });
const NavScreen=StackNavigator({

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
        screen:AppDrawer,
    },

    Registration:{
        screen:Register
    },
    Booking:{
        screen:Booking
    },
    Theatre:{
        screen:theatre
    }
},
    {
        navigationOptions:{
            initialPage:'Start'
        }
    }
);

export default NavScreen;