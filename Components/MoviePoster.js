import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,TouchableOpacity,Modal,Button,StyleSheet,Animated,Easing} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMovie} from './redux/Action/actionMovie'
import {DefaultStylr,Card,CardItem} from "../Components/Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
let { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;
import {checkSignIn} from './CheckSignIn'
class MoviePoster extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            modalVisible:false,
            loading:false,
            selectedMovie:'',
            fadeIn:new Animated.Value(0)
        };
    }
    static navigationOptions = {
        title: 'Movie Ticket Booking',
    };

    openModal(data) {
        this.setState({modalVisible:true,selectedMovie:data});
    }

    closeModal() {
        this.setState({modalVisible:false});

    }

  componentDidMount()
  {
      //getState.Movie.page=this.props.page
      this.props.getMovieAction(this.props);
      //checkSignIn();
      Animated.timing(this.state.fadeIn,{
          toValue:1,
          //easing:Easing.out(Easing.quad),
          duration:10000
      }).start();

  }
    shouldComponentUpdate(nextprops,nextstate)
    {
        return true
    }

    renderItems = () => {
        return (
            this.props.movie.map((data,key)=>{
              //  console.log(data.Ratings);
               // if(data.Ratings<=7)
                return (
                    <TouchableOpacity key={data._id} onPress={()=>{this.openModal(data)}}>
                        <View style={styles.container}>
                            <Image source={{uri:data.Poster}} style={styles.imageStyle} />
                        </View>
                        <View style={{height:responsiveHeight(8),width:responsiveWidth(25)}}>
                        <Text style={styles.title}  >{data.Title}</Text>
                        <Text style={styles.genre}>{data.Genre}</Text>
                        </View>
                        <Button title="Book" onPress={()=>{this.props.navigation.navigate('Location')}}></Button>
                    </TouchableOpacity>
                )
            })
        )
    };


    renderMovieDetails=(data)=>{
                return(
                    <View style={styles.ModalView}>
                        <View style={styles.container}>
                            <Image source={{uri:data.Poster}} style={styles.imageStyle} />
                        </View>
                        <View>
                             <Text style={[styles.MTextcontainer,{color:'blue'}]} numberOfLines={1}>{data.Title}</Text>
                            <Text style={[styles.MTextcontainer,{color:'blue'}]}>{data.Genre}</Text>
                            <Text style={styles.MTextcontainer}>Leading Actor: <Text style={{color:'blue'}} numberOfLines={1}>{data.LeadingActorMale}</Text></Text>
                            <Text style={styles.MTextcontainer}>Leading Actress:<Text style={{color:'blue'}} numberOfLines={1}>{data.LeadingActorFemale}</Text></Text>
                            <Text style={styles.MTextcontainer}>Duration:<Text style={{color:'blue'}} numberOfLines={1}>{data.Duration} hrs</Text></Text>
                            <Text style={styles.MTextcontainer}>Ratings:<Text style={{color:'blue'}} numberOfLines={1}>{data.Ratings}/10</Text></Text>
                            <Text style={styles.MTextcontainer}>Description:<Text style={{color:'blue'}} numberOfLines={10}>{data.Description}</Text></Text>
                        </View>
                    </View>
                )

    }
    render()
    {
        return(

                <View style={styles.ViewStyle}>
                    {
                        //console.log(this.state.movie)
                        //this.mapping()
                       this.renderItems()
                    }
                    <Modal
                        visible={this.state.modalVisible}
                        style={{height:100,backgroundColor:'black'}}
                        onRequestClose={() => this.closeModal()}
                    >

                        <Animated.View style={[styles.modalContainer,{opacity:this.state.fadeIn}]}>
                                {this.renderMovieDetails(this.state.selectedMovie)}

                        <View style={styles.ModalButton}>
                            <Button
                                onPress={() => this.closeModal()}
                                title="X"

                            >
                            </Button>

                        </View>
                        </Animated.View>
                    </Modal>

                </View>


        )
    }
}

const mapStateToProps=state=>{
    return{

        movie:state.Movie.movie
    }
}

function mapDispatchToProps(dispatch) {
    //console.log(this.props)
    return{

        getMovieAction:(props)=>{
            dispatch(getMovie(props));
        }

    }
}
const styles = {
    container: {
        marginLeft: 10,
        marginBottom: 10,
        height: (height-40) / rows - 10,
        width: (width - 10) / cols - 10,
    },
    imageContainer:{

        flex:1,
    },
    imageStyle:{

        borderRadius: 10,
        ...StyleSheet.absoluteFillObject,
    },
    title:{
        marginLeft:10,
        ...DefaultStylr.text,
        fontSize:responsiveFontSize(1.6),
    },
    genre:{
        ...DefaultStylr.text,
        color:'#636363',
        marginLeft:10,
        fontSize:responsiveFontSize(1.3),
       // paddingTop:5

    },
    ViewStyle:{
            flexGrow: 1,
            justifyContent: 'flex-start',
            flexDirection:'row',
            flexWrap:'wrap',
    },
    ModalView:{
        flexDirection:'row'

    },
    ModalStyle:{
      paddingTop:50,
      paddingBottom:50

    },
    modalContainer: {
        justifyContent: 'center',
        backgroundColor:'grey',
        height:responsiveHeight(50),
        marginRight:responsiveWidth(10),
        marginLeft:responsiveWidth(10)

    },
    MTextcontainer: {
        ...DefaultStylr.text,
        fontSize:responsiveFontSize(1.5),
        paddingLeft:5,
        marginRight:responsiveWidth(35)
    },
    ModalButton:{
        justifyContent: 'flex-end'
    },
   }

export default connect(mapStateToProps,mapDispatchToProps)(MoviePoster);