import React,{Component} from 'react';
import {Text,View,ImageBackground,Image,Alert,TouchableOpacity,Linking,AsyncStorage} from 'react-native';
import {Card,CardItem,Header,Input,Button} from "../Components/Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {checkSignIn} from './CheckSignIn'
import {UserLogIn} from '../Components/redux/Action/actionUser'
import {connect} from 'react-redux';
import {NavigationActions} from "react-navigation";
class LoginForm extends Component
{
    state={email:'preema@gmail.com',password:'123',error:''};

    static navigationOptions = {
        title: 'Movie Ticket Booking',
    };
    componentWillReceiveProps(nextprops)
    {
        if(nextprops.status===200)
        {

            AsyncStorage.setItem("userToken",nextprops.data.headers['x-auth']);
           /* const value =  AsyncStorage.getItem('userToken').then((data)=>{
                console.log(data);
            }).catch((err)=>{
                console.log(err)
                });
            console.log("asynch storage");
            console.log(value);*/
            var { navigate } = this.props.navigation;
            navigate('Home');
            Alert.alert("user logged in");
        }
        else
        {
            Alert.alert('Please enter correct details');

        }

    }


    onButtonClick(){

        if(this.state.email==='' && this.state.password==='')
        {
            alert("Please fill the details");
        }
        else
        {

            this.props.UserLogIn(this.state.email,this.state.password)

        }

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
    Register()
    {
        debugger
        var { navigate } = this.props.navigation;
        navigate('Registration')
    }

    render()
    {


        return(

            <View>
                <ImageBackground
                    style={styles.bgImageStyle}
                    source={require('./../Image/Theatre.jpg')}
                    >

                    <Card style={styles.containerStyle}>
                            <CardItem>
                                <Header headerText={'Login'}/>
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <Input
                                    label={'Email:'}
                                    value={this.state.email}
                                    onChangeText={email => this.setState({email})}
                                    placeholder='user@gmail.com'
                                />
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <Input
                                    label={'Password:'}
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={password => this.setState({password})}
                                    placeholder='Password'
                                />
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <Button onPress={this.onButtonClick.bind(this)}
                                style={styles.ButtonStyle}
                                >LogIn
                                </Button>
                            </CardItem>
                        </Card>

                            <Card style={styles.containerStyleImg}>
                            <CardItem style={styles. IconcardItemStyle}>
                        <Image source={require('./../Image/facebook-logo-button.png')}
                               resizeMode={'contain'}
                               style={{height:responsiveHeight(10),width:responsiveWidth(20)}}
                        />
                                <TouchableOpacity onPress={()=>{Linking.openURL('http://localhost:3000/github')}}>
                                <Image source={require('./../Image/google-plus-logo-button.png')}
                                       resizeMode={'contain'}
                                       style={{height:responsiveHeight(10),width:responsiveWidth(20)}}
                                />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{Linking.openURL('http://localhost:3000/auth/google')}}>
                                    <Image source={require('./../Image/github-logo.png')}
                                           resizeMode={'contain'}
                                           style={{height:responsiveHeight(10),width:responsiveWidth(20)}}
                                    />
                                </TouchableOpacity>
                            </CardItem>
                            </Card>
                <Text style={styles.textStyle}>
                    <Text onPress={()=>{this.Register()}}>SignUp</Text>
                    <Text onPress={()=>{this.Home()}}>/Skip</Text>
                </Text>

                </ImageBackground>
            </View>
        )
    }

};

const mapStateToProps=state=>{
    return{
        token1:state.User.token1,
        status:state.User.status,
        data:state.User.data
    }
}
const styles ={
    bgImageStyle:{
        height:responsiveHeight(100),
        width:responsiveWidth(100),
        justifyContent:'center',
        alignItems: 'center'

    },
    containerStyle:{
        paddingTop:10,
        borderWidth:1,
        borderRadius:2,
        borderBottomWidth:0,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        marginBottom:10,
        marginLeft:7,
        marginRight:7,
        width:responsiveWidth(90),
        height:responsiveHeight(30),
        opacity:0.5,
        backgroundColor:"#000"
    },
    containerStyleImg:{
        paddingTop:10,
        borderWidth:1,
        borderRadius:2,
        borderBottomWidth:0,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        marginBottom:10,
        marginLeft:7,
        marginRight:7,
        width:responsiveWidth(90),
        // height:responsiveHeight(30),
        opacity:0.5,
        backgroundColor:"#000"
    },
    ViewStyle:{
        marginRight:10,
        marginLeft:11,
        justifyContent:'center',
        height:responsiveHeight(100),
        width:responsiveWidth(94),

    },

    cardItemStyle:{
        borderBottomWidth:1,
        padding:5,
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        backgroundColor:"#000"

    },
    logoStyle:{
        height:responsiveHeight(10),
        width:responsiveWidth(20),
        opacity:0.8
    },
    textStyle:{
        color:'#fff',
        fontSize:responsiveFontSize(2)
    },
    iconStyle:{
        justifyContent:'space-between',
        borderBottomWidth:1,
        padding:5,
        flexDirection:'row',
        borderColor:'#121212',
        backgroundColor:'000'
    },
    ButtonStyle:{
        alignSelf:'stretch',
        flex:1,
        backgroundColor:'#000',
        borderWidth:1,
        borderColor:'#000',
        marginRight:5,
        marginLeft:5,
    },
    IconcardItemStyle:{
        borderBottomWidth:1,
        padding:5,
        justifyContent:'space-between',
        flexDirection:'row',
        borderColor:'#ddd',
        backgroundColor:"#fff"

    },


};

export default connect(mapStateToProps,{UserLogIn})(LoginForm);