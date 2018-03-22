import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Text,View,Animated,Dimensions,Alert,TouchableWithoutFeedback} from 'react-native';
import {getSeatNumber} from './redux/Action/actionScreen'
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
let ROWS=6,
    COLUMN=5,
    seats=[],
    seatsNumber=[]
    selectedSeat=[];


class seatView extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            totalNoOfSeats:0
        }
        this.tId=(!this.props.navigation.state.params)?" ":this.props.navigation.state.params.theatreId;
        this.noSeats=(!this.props.navigation.state.params)?" ":this.props.navigation.state.params.seat;

    }
    componentDidMount()
    {
        this.props.getSeatNumber(this.tId);
    }
    componentWillReceiveProps()
    {

        debugger
        console.log("hie");
        console.log(this.props.screens);

        console.log(this.noSeats);
    }
    shouldComponentUpdate(nextprops,nextstate)
    {

        console.log(nextprops.screens.ScreenSeat);
        return true;

    }
    setSeats(data)
    {
        if(this.state.totalNoOfSeats !== data)
        this.setState({
            totalNoOfSeats:nextprops.screen.ScreenSeat
        });
    }
    seat()
    {
                seats=[];
                for(let i=0;i<this.state.totalNoOfSeats;i++)
                {
                    seatsNumber.push(i);
                    seats.push(
                        <View>
                            <View style={{height: 30, width: 30, backgroundColor: 'black', marginLeft: 6.5, margin:5}}/>
                        </View>

                    )
                }

                return seats

    }
    render()
    {
        return(
            <View>
            <View style={{height:500,width:width,backgroundColor:'grey',flexDirection:'row',flexWrap:'wrap'}}>
                {
                   this.seat()
                }
            </View>
                <View style={{backgroundColor:'black',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:18}}>------Screen this Way------</Text>
                </View>
            </View>
        )
    }

}
    const mapStateToProps=state=>
    {
debugger
        return{
            screens:state.Screen.screen
        }
    };
export default connect (mapStateToProps,{getSeatNumber})(seatView);