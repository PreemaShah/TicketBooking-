import React,{Component} from 'react';
import {Text,View,AsyncStorage} from 'react-native';
import axios from 'axios';
import StartPage from './StartPage'
import {NavigationActions} from 'react-navigation'
class logOut extends Component
{
    constructor(props)
    {
        super(props)
    }
    async deleteToken(Token)
    {
        try{

            var tok= await AsyncStorage.removeItem(Token);
            console.log(tok);
            return tok;
        }
        catch(error){
            console.log(error);
        }
    }
    onLogout()
    {
        axios.put('http://localhost:3000/deleteToken').then((response)=>{
            if(response.data=='1')
            {
                this.deleteToken('userToken');
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName:'Start'
                        })
                    ]
                }))
            }
            else{
                alert("Logout Failed :"+response.data);
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
    render()
    {
        return(
            <View>
                {this.onLogout()}
            </View>
        )
    }

}
export default logOut;