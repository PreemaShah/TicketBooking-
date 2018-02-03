import React,{Component} from 'react';
import {Text,View,ImageBackground,Image,Alert,TouchableOpacity,Linking} from 'react-native';
import {Card,CardItem,Header,Input,Button} from "../Components/Common";
class LoginForm extends Component
{

    state={email:'',password:'',error:'',loading:false};

    static navigationOptions = {
        title: 'Welcome',
    };
    onButtonClick(){
        fetch("http://localhost:3000/user",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        }).then((response)=>response.json()).then((responseJson)=>{
           var success=JSON.stringify(responseJson);
           var succ=JSON.stringify("success");
           if(success===succ)
           {
               var { navigate } = this.props.navigation;
              navigate('Home')
           }
           else{
               Alert.alert('Please enter correct details');
           }
        }).catch((error)=>{
            console.error(error);
        });
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
                                >
                                    LogIn
                                </Button>
                            </CardItem>
                        </Card>



                            <Card style={styles.containerStyle}>
                            <CardItem style={styles. IconcardItemStyle}>
                        <Image source={{uri:'/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/github-logo.png'}}
                               style={{height:50,width:50}}
                        />

                                <Image source={{uri:'/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/github-logo.png'}}
                                       style={{height:50,width:50}}
                                />

                                <Image source={{uri:'/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/github-logo.png'}}
                                       style={{height:50,width:50}}
                                />

                                <TouchableOpacity onPress={()=>{Linking.openURL('http://localhost:3000/auth/google')}}>
                                    <Image source={{uri:'/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/google-plus-logo-button.png'}}
                                           style={{height:50,width:50}}
                                    />
                                </TouchableOpacity>
                            </CardItem>
                            </Card>


                </ImageBackground>
            </View>
        )
    }

};
const styles ={
    bgImageStyle:{
        height:'100%',
        width:'100%',
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
        width:'90%',
        opacity:0.5,
        backgroundColor:"#000"
    },
    ViewStyle:{
        marginRight:10,
        marginLeft:11,
        justifyContent:'center',
        height:'100%',
        width:'94%',

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
        height:'10%',
        width:'20%',
        opacity:0.8
    },
    textStyle:{
        color:'#fff',
        fontSize:20
    },
    iconStyle:{
        justifyContent:'space-between',
        borderBottomWidth:1,
        padding:5,
        flexDirection:'row',
        borderColor:'#121212',
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


export default LoginForm;