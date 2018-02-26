import React,{Component} from 'react';
import {Text,View,ImageBackground,Image} from 'react-native';
import {Button,CardItem,Card} from './Common';
import {NavigationActions} from 'react-navigation'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
class StartPage extends Component
{

    constructor(props){
        super(props);
        //console.log(props)
    }
    Login()
    {
        console.log(this.props)
        var { navigate } = this.props.navigation;
        navigate('Login')
    }
    Register()
    {
        debugger
        var { navigate } = this.props.navigation;
        navigate('Registration')
    }
    Home()
    {
       /* var { navigate } = this.props.navigation;
        navigate('Home')*/
       this.props.navigation.dispatch(NavigationActions.reset({
               index:0,
                actions:[
                    NavigationActions.navigate(
                        {
                            routeName:'Home'
                        }
                    )
                ]
           }))

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
                        </View>

                        <View style={styles.buttonViewStyle}>
                                <Button style={styles.ButtonStyle}
                                onPress={this.Register.bind(this)}>SignUp</Button>
                                <Button style={styles.ButtonStyle}
                                        onPress={this.Login.bind(this)}>SignIn</Button>
                                <Button style={styles.ButtonStyle}
                                    onPress={this.Home.bind(this)}>Skip</Button>
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


    },
    mainViewStyle:{
        justifyContent:'flex-start',
        height:'100%'
    },
    imageViewStyle:{
        //borderWidth: 2,
        borderColor:'#4455ff',
        height: responsiveHeight(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    ImageStyle:{
        width:responsiveWidth(50),
        height:responsiveHeight(30),
        //alignSelf:'center',
        //borderWidth: 4

    },
    ButtonStyle:{
        alignSelf:'stretch',
        flex:1,
        backgroundColor:'#000',
        borderWidth:1,
        borderColor:'#000',
        marginRight:5,
        marginLeft:5,
    }

}

export default StartPage;


