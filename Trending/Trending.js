import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,TouchableOpacity,Modal,Button,ActivityIndicator,StyleSheet} from 'react-native';
import MoviePoster from '../Components/MoviePoster'
class Trending extends Component
{
    render()
    {

                            return (


                                       <ScrollView contentContainerStyle={styles.scrollStyle}
                                                    showsHorizontalScrollIndicator={false}
                                                    showsVerticalScrollIndicator={false}
                                                    >
                                           <View style={styles.container}>
                                        <MoviePoster page='Trending'
                                                     {...this.props}/>
                                           </View>
                                       </ScrollView>


                            )
    }

}
const styles = {
    container:{
        paddingTop:20,
    }
}
export default Trending;

