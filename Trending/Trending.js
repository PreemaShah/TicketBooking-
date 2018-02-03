import React,{Component} from 'react';
import {Text,View,Dimensions,Image} from 'react-native';
import {Card,CardItem} from "../Components/Common";
import ResponsiveImage from 'react-native-responsive-image';
class Trending extends Component
{

    render()
    {
        let {height, width} = Dimensions.get('window');
        console.log(height);
        console.log(width);
        return(
            <View>
            <View style={{ flexGrow: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                <CardItem style={styles.cardItemStyle}>
            <ResponsiveImage
                source={{uri:'/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/ELEPHANTSHOE_DESKTOP_WALLPAPER_OCTOBER_2012.jpg'}}
                initWidth='415'
                initHeight="150">
            </ResponsiveImage>
                </CardItem>
            </View>
                <View style={{ flexGrow: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                <CardItem style={styles.cardItemStyle}>
                    <ResponsiveImage
                        source={{uri:'/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/index.jpg'}}
                        initWidth='415'
                        initHeight="150"
                        >
                    </ResponsiveImage>
                </CardItem>
                </View>
            </View>


        )
    }
};
const styles = {
    cardItemStyle:{
        borderBottomWidth:1,
        padding:5,
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',

    }
}
export default Trending;