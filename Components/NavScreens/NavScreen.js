import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {View,TouchableOpacity,Image,Text} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import React,{Component} from 'react'
import MyTab from '../TAB';
import userProfile from '../userProfile'
import Location from '../Location'
import logOut from '../logOut'




const NavScreen = DrawerNavigator({
        Home: { screen: MyTab },
        Location:{screen:Location},
        LogOut:{screen:logOut},
        Profile:{screen:userProfile}

    },
    {
        navigationOptions:({navigation})=>({
            headerLeft : <View>
                <TouchableOpacity onPress={()=> navigation.navigate("DrawerOpen")}>
                    <Image source={require('../../Image/list-menu.png')} style={{height:responsiveHeight(4), width:responsiveWidth(8)}} />
                </TouchableOpacity>
            </View>
        })
    });

export default NavScreen;