import React,{Component} from 'react';
import {Text,View,ImageBackground,Alert,TouchableOpacity,Image} from 'react-native';
import {Card,CardItem,Header,Input,Button} from "../Components/Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import {getTheatre} from './redux/Action/actionTheatre';
import {connect} from 'react-redux'
class theatre extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: 'Theaters',
    };
    componentDidMount()
    {
        console.log(this.props.navigation.state.params.itemValue);
        this.props.getTheatreAction(this.props.navigation.state.params.itemValue);
    }
    shouldComponentUpdate(nextprops,nextstate)
    {
        console.log(this.props.thtr);
        return true
    }
    ReleasedMovie(theatrename)
    {
        console.log("theater name");
        console.log(theatrename);
        this.props.navigation.navigate('ReleasedMovie',{theatrename})
    }

    displayThtr=()=>
    {
        var arr1=this.props.thtr;
        console.log("arr1");
        console.log(arr1);
        //alert(arr1)
        var SortArr = arr1.slice(0);
        SortArr.sort(function(a,b) {
            var x = a.TheatreName.toLowerCase();
            var y = b.TheatreName.toLowerCase();

            return x < y ? -1 : x > y ? 1 : 0;
        });
        console.log(SortArr);

        return(
            SortArr.map((data,key)=>{
               console.log(data);
               //alert(data)
                return(
                    <TouchableOpacity key={data._id}  style={styles.button} onPress={()=>this.ReleasedMovie(data._id)}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../Image/download2.jpeg')}
                                style={{height:responsiveHeight(10) , width:responsiveWidth(20)}}/>
                            <Card style={styles.containerStyle}>
                                <CardItem style={styles.cardItemStyle} >
                                    <Text style={styles.textStyle}>{data.TheatreName}</Text>
                                </CardItem>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    )
            })
        )

    }
    render()
    {
        return(
            <View>
                <ImageBackground
                    style={styles.bgImageStyle}
                    source={require('./../Image/download.jpeg')}
                >
                {this.displayThtr()}
                </ImageBackground>
            </View>
        )
    }

}

const mapStateToProps=state=>{
    return{
        thtr:state.Theatre.thtr
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getTheatreAction:(props)=>{
            dispatch(getTheatre(props))
        }
    }

}
const styles={

    bgImageStyle:{
        height:responsiveHeight(100),
        width:responsiveWidth(100),
        justifyContent:'flex-start',
        alignItems: 'flex-start'

    },
    cardItem:{
        border:1,
        borderColor:'white'
    },
    textStyle:{
        color:'white',
        fontSize:25
    },
    cardItemStyle:{
        borderBottomWidth:1,
        padding:5,
        justifyContent:'flex-start',
        flexDirection:'column',
        borderColor:'#ddd',
        backgroundColor:"#000"

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
        height:responsiveHeight(10),
        opacity:0.5,
        backgroundColor:"#000"
    },
}
export default connect(mapStateToProps,mapDispatchToProps)(theatre);