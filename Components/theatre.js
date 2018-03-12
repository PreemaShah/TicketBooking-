import React,{Component} from 'react';
import {Text,View,ImageBackground,Image,Alert,TouchableOpacity} from 'react-native';
import {Card,CardItem,Header,Input,Button,FlatList} from "../Components/Common";
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
                return(

                    <CardItem>
                             <Text>{data.TheatreName}</Text>
                    </CardItem>
                    
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
                    source={require('./../Image/Theatre.jpg')}
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(theatre);