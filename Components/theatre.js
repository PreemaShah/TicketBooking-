import React,{Component} from 'react';
import {Text,View,ImageBackground,Image,Alert,TouchableOpacity} from 'react-native';
import {Card,CardItem,Header,Input,Button} from "../Components/Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import {getTheatre} from './redux/Action/actionTheatre';
import _ from 'lodash';
import {connect} from 'react-redux'
class theatre extends Component {
    constructor(props) {
        super(props)
    }
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
        arr1.sort(function (a,b)

            {
                return (a.TheatreName > b.TheatreName) ? 1 : 0;
            }
        );
        return(
           arr1.map((data,key)=>{
               console.log(data)
                return(

                    <TouchableOpacity key={data._id}  style={styles.button} onPress={()=>this.ReleasedMovie(data._id)}>
                    <CardItem  >
                             <Text style={styles.textStyle}>{data.TheatreName}</Text>
                        <Text style={styles.textStyle}>{data._id}</Text>
                    </CardItem>
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
        justifyContent:'center',
        alignItems: 'center'

    },
    cardItem:{
        border:1,
        borderColor:'white'
    },
    textStyle:{
        color:'white',
        fontSize:25
    },
    button: {
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop: 10
    },
}
export default connect(mapStateToProps,mapDispatchToProps)(theatre);