import React,{Component} from 'react';
import {Text,View,ImageBackground,Image,Alert,TouchableOpacity,Linking} from 'react-native';
import {Card,CardItem,Header,Input,Button} from "../Components/Common";
import {connect} from 'react-redux'
import {UserReg} from '../Components/redux/Action/actionUser'
class Registration extends Component
{
    constructor(props){
        super(props)
    }

    state={email:'',password:'',error:'',Name:'',UserId:''};

    static navigationOptions = {
        title: 'Welcome',
    };
    onButtonClick(){

        if(this.state.Name===''&& this.state.email===''&&this.state.password===''&&this.state.UserId==='')
        {
            alert("Please fill the details");
        }
        else
        {

            this.props.UserReg(this.state.Name,this.state.email,this.state.password,this.state.UserId).then((response)=>{
                console.log(this.props.user);
                Alert.alert("user created");
            }).catch((err)=>{
                console.log(err);
            })
        }
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
                            <Header headerText={'Registration'}/>
                        </CardItem>
                        <CardItem style={styles.cardItemStyle}>
                            <Input
                                label={'Name:'}
                                value={this.state.Name}
                                onChangeText={Name => this.setState({Name})}
                                placeholder='Name'
                            />
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
                            <Input
                                label={'UserId'}
                                value={this.state.UserId}
                                onChangeText={UserId => this.setState({UserId})}
                                placeholder='User_'
                            />
                        </CardItem>

                        <CardItem style={styles.cardItemStyle}>
                            <Button onPress={this.onButtonClick.bind(this)}
                                    style={styles.ButtonStyle}
                            >
                                Register
                            </Button>
                        </CardItem>
                    </Card>

                </ImageBackground>
            </View>
        )
    }

};
const mapStateToProps=state=>
{
    return{
        user:state.RegUser.user
    }
};

{/*function mapDispatchToProps(dispatch)
{
    return{
        RegisterUser:()=>{
            dispatch(UserReg());
        }
    }
}*/}
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


export default connect(mapStateToProps,{UserReg})(Registration) ;