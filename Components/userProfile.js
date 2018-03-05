import React,{Component} from 'react'
import {View,Text,ImageBackground} from 'react-native'
import {Card,CardItem,Input,Button,Header} from "./Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {connect} from 'react-redux';

class userProfile extends Component
{
    constructor(props)
    {
        super(props)
        this.state={Name:'',email:'',UserId:''};
    }

    componentWillMount()
    {
        console.log(this.props.data);
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
                                <Header headerText={'Profile'}/>
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <Input
                                    label={'Name:'}
                                    value={this.props.data.Name}
                                    onChangeText={(text)=>this.setState({Name})}
                                />
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <Input
                                    label={'Email:'}
                                    value={this.props.data.email}
                                    onChangeText={(text)=>this.setState({email})}
                                />
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <Input
                                    label={'UserId'}
                                    value={this.props.data.UserId}
                                    onChangeText={(text)=>this.setState({UserId})}
                                />
                            </CardItem>

                            <CardItem style={styles.cardItemStyle}>
                                <Button style={styles.ButtonStyle}>Save</Button>
                            </CardItem>
                        </Card>

                    </ImageBackground>
                </View>

        )
    }
}
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

const mapStateToProps = state=>{
    return{
        data:state.User.data
    }

}

 export default connect(mapStateToProps,{})(userProfile);