import React,{Component} from 'react';
import {Text,View,Animated,Dimensions,TouchableOpacity,ImageBackground} from 'react-native'
import {responsiveWidth,responsiveHeight,responsiveFontSize} from "react-native-responsive-dimensions";
let height=Dimensions.get('window').height;
let width=Dimensions.get('window').width;
let ticket=[1,2,3,4,5,6,7,8,9,10];
class Booking extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            selectedSeat:0
        };
        this.val= new Animated.Value(height)
    }

    componentDidMount() {
        console.log("in animated");
        Animated.spring(this.val, {
            toValue: 50,
            duration: 3000,
            useNativeDriver:true
        }).start()
    }

    NoOfSeats=(data)=>{
        if(this.state.selectedSeat !== data){
            this.setState({
                selectedSeat: data
            });
        }
    };

    render()
    {

        return(
            <View  style={{justifyContent:'center',height:height,width:width}}>
                <ImageBackground
                    style={styles.bgImageStyle}
                    source={require('./../Image/download.jpeg')}
                >
                <Animated.View style={{height:300,width:400,backgroundColor:'#fff',opacity:0.5,transform:[{translateY:this.val}]}}>
                    <View>
                        <Text style={styles.textStyle}>Balcony:</Text>
                    </View>
                    <View style={{width:1000,borderBottomWidth:2,justifyContent:'center',borderTopWidth:2,}}>
                    <View style={{width:300}}>
                        <Text style={styles.textStyle}>How Many Tickets?</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:10,height:responsiveHeight(6)}}>
                        {
                            ticket.map((data,key)=>{
                                console.log(data);
                                return(
                                    <TouchableOpacity key={data} onPress={()=>{this.NoOfSeats(data)}}>
                                        <View style={{backgroundColor:(this.state.selectedSeat === data) && "yellow" || "pink",height:(this.state.selectedSeat === data) && responsiveHeight(6) || responsiveHeight(4),width:responsiveWidth(9) ,borderWidth:(this.state.selectedSeat === data) && 1 || 0,width:responsiveWidth(9),paddingLeft:5,paddingRight:2}}>
                                            <Text style={[styles.ArrtextStyle,{fontSize:(this.state.selectedSeat === data) && responsiveFontSize(3)||responsiveFontSize(2.5)}]}>{data}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                </Animated.View>
                </ImageBackground>
            </View>
             )
    }

}
const styles={

    bgImageStyle:{
        height:responsiveHeight(100),
        width:responsiveWidth(100),
        justifyContent:'flex-start',
        alignItems: 'flex-start'

    },
    textStyle:{
        color:'black',
        fontSize:responsiveFontSize(3.5),
        paddingLeft:10
    },
    ArrtextStyle:{
        color:'black',

    },
}
export default Booking;