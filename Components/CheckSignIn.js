import React,{Component} from 'react';
import {Text,View,AsyncStorage} from 'react-native';
global.home=true;
   export const checkSignIn=()=> {

        return AsyncStorage.getItem('userToken').then((token)=>{
            console.log(token);
            if(!token)
            {

                 global.home=false;
                console.log(global.home);
            }
            else {

                 global.home=true;
                console.log(global.home)
            }
        }).catch((err)=>{
           console.log(err)
        })
};


