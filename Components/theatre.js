import React,{Component} from 'react';
import {Text,View,ImageBackground,Image,Alert,TouchableOpacity} from 'react-native';
import {Card,CardItem,Header,Input,Button} from "../Components/Common";
import {connect} from 'react-redux'
class theatre extends Component {
    constructor(props) {
        super(props)
    }
    render()
    {
        return(
            <View>
                <Text>
                    {this.props.navigation.state.params.value}
                </Text>
            </View>
        )
    }

}
export default theatre;