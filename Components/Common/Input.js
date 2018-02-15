import React from 'react';
import {Text,View,TextInput} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

 const Input = ({label,value,onChangeText,placeholder,secureTextEntry})=>{
     return(
         <View style={styles.containerStyle}>
         <Text style={styles.textStyle}>{label}</Text>
             <TextInput
                 secureTextEntry={secureTextEntry}
                 placeholder={placeholder}
                 autoCorrect={false}
                 value={value}
                 autoCapitalize = 'none'
                 onChangeText={onChangeText}
                 style={styles.inputStyle}>
             </TextInput>
         </View>
     )
 }

 const styles={
     inputStyle:{
         fontSize:responsiveFontSize(2),
        marginLeft:5,
         marginRight:5,
         color:'#fff',
         flex:2,
         lineHeight:25
     },
     textStyle:{
         fontSize:responsiveFontSize(2),
         paddingRight:5,
         flex:1,
         color:'#fff'

     },
     containerStyle:{
         flex:1,
         height:responsiveHeight(5),
         flexDirection:'row',
         alignItems:'center'
     }

 }

 export {Input};