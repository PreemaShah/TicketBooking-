import React,{Component} from 'react';
import {Text, View, ImageBackground, Image, AsyncStorage,Animated,Easing} from 'react-native';
import {Button,CardItem,Card,ProgressBar} from './Common';
import {NavigationActions} from 'react-navigation';
import NavScreen from '../Components/NavScreens/NavScreen'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
class SplashScreen extends Component
{

    constructor(props){
        super(props);
    }
    componentWillMount() {
        AsyncStorage.getItem('userToken').then((token)=>{
            console.log(token);
            if(!token)
            {
                setTimeout(()=>{
                    this.props.navigation.navigate('Login');
                },4000);

            }
            else {
                setTimeout(()=>{
                    this.props.navigation.navigate('Home');
                },4000);

            }
        }).catch((err)=>{
            console.log(err)
        })
    }




    render()
    {
        return(
            <View>
                <ImageBackground
                    source={require('./../Image/BgStart.jpg')}
                    style={styles.bgImageStyle}>

                    <View style={styles.mainViewStyle}>
                        <View style={styles.imageViewStyle}>
                            <Image source={require('./../Image/m_logo.png')}
                                   style={styles.ImageStyle}
                            />
                            <ProgressBar/>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        )
    }
}
const styles = {
    bgImageStyle: {
        height: '100%',
        width: '100%',
        justifyContent:'center'
    },
    mainViewStyle:{
        justifyContent:'center',
        height:'100%'
    },
    imageViewStyle:{
        //borderWidth: 2,
        borderColor:'#4455ff',
        height: responsiveHeight(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageStyle:{
        width:responsiveWidth(50),
        height:responsiveHeight(30),

    },

}
export default SplashScreen;


