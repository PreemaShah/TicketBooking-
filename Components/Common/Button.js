import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button =({onPress,children,style})=>
{
    return(
        <TouchableOpacity onPress={onPress}
                          style={style} >
            <Text style={Styles.TextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const Styles={
    TextStyle:{
        alignSelf:'center',
        fontSize:16,
        color:'#fff',
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10

    }
}
export {Button};