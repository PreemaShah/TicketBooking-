import React,{Component} from 'react';
import {Text,View,AsyncStorage} from 'react-native';


class CheckSignIn extends Component{



    checkSignIn() {


        return AsyncStorage.getItem('userToken').then((token)=>{
            console.log(token);
            if(!token)
            {
                return Promise.resolve(false);
            }
            else {
                return  Promise.resolve(true);
            }
        }).catch((err)=>{
            return  Promise.reject(err)
        })
    }

    render(){

        return(
            <View>
                {(true)?
                <WithoutProfile/>:<Profile/>}
            </View>
        )
    }
}

export default CheckSignIn;







