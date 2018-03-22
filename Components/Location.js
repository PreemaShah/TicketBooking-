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
        this.state={cities:[],selectedCity:''}
    }

    static navigationOptions = {
        title: 'Book',
    };
    componentDidMount(){
        this.props.getCity();
    }

    render()
    {
        return(
            <View>

                <Picker selectedValue={this.state.selectedCity}
                        onValueChange={(itemValue, itemIndex) => {this.setState({selectedCity:itemValue})
                                                                    this.props.navigation.navigate('Theatre',{city:itemValue._id,cityName:itemValue.city})
                        }}>
                    <Picker.Item label='select city'/>
                    {
                        this.props.city.map((value,key)=>{
                            return(
                                <Picker.Item label={value.city} value={value} key={value._id}/>
                            )
                        })
                    }

                </Picker>

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