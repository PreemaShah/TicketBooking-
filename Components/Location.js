import React,{Component} from 'react';
import {Text,View,Alert,Picker} from 'react-native'
import {CardItem} from "./Common";
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import {getCity} from './redux/Action/actionLocation'
class Location extends Component
{
    constructor(props)
    {
        super(props)
        this.state={cities:[]}
    }

    componentWillMount()
    {
        this.props.getCity();

    }
    componentDidMount(){
        console.log(this.props.city.data);
    }

   /* renderCity=()=>
    {

        console.log("in rendercity");
        return(
            this.props.city.map((data,key)=>{
                console.log(data);
                this.state.cities.push(data)

            })
        )
    }*/

    render()
    {
        return(
            <View>
              {/*  <Picker onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                    <Picker.Item label={this.props.city} value={this.props.city._id}/>
                </Picker>*/}
            </View>

        )
    }

}
const styles =
    {
        PickerTextStyle:{
            paddingLeft:15,
            fontSize:18
        }
    };
const mapStateToProps=state=>{
    return{
        city:state.City.city
    }
};
/*function mapDispatchToProps(dispatch) {
    debugger;
    return{
        getCityAction:()=>{
            dispatch(getCity())
        }
    }

}*/
export default connect(mapStateToProps,{getCity})(Location);