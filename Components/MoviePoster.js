import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,TouchableOpacity,Modal,Button,ActivityIndicator,StyleSheet} from 'react-native';
import axios from 'axios';
import {DefaultStylr,Card,CardItem} from "../Components/Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
let { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;

class MoviePoster extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            modalVisible:false,
            movie:[],
            loading:false,
            selectedMovie:''
        };
    }

    openModal(data) {
        this.setState({modalVisible:true,selectedMovie:data});
    }

    closeModal() {
        this.setState({modalVisible:false});

    }

    async componentDidMount()
    {

        this.setState({loading:true})
        await this.movieDetail().then((data)=>{
            this.setState({movie:data,loading:false})
        });
    }
    async movieDetail()
    {
        var promise = new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/Movie?page="+this.props.page).then((response)=>{
                resolve(response.data);

            }).catch((err)=>{
                console.log(err);
                reject();
            })
        })
        return promise;
    }
    renderItems = () => {
        return (
            this.state.movie.map((data,key)=>{
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
                        <Button title="Book" onPress={()=>{this.props.navigation.navigate('Booking')}}></Button>
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

        if(this.state.loading)
        {
            return <ActivityIndicator size={'small'}/>
        }
        return(

                <View style={styles.ViewStyle}>
                    {
                        //console.log(this.state.movie)
                        //this.mapping()
                       this.renderItems()
                    }
                    <Modal
                        visible={this.state.modalVisible}
                        animationType={'slide'}
                        style={{height:100,backgroundColor:'black'}}
                        onRequestClose={() => this.closeModal()}
                    >
                        <View style={styles.modalContainer}>
                                {this.renderMovieDetails(this.state.selectedMovie)}
                        </View>
                        <View style={styles.ModalButton}>
                            <Button
                                onPress={() => this.closeModal()}
                                title="X"

                            >
                            </Button>

                        </View>
                    </Modal>

                </View>


        )
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
        ...DefaultStylr.text,
        fontSize:responsiveFontSize(1.6),
    },
    genre:{
        ...DefaultStylr.text,
        color:'#636363',
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
        flex: 1,


    },
    MTextcontainer: {
        ...DefaultStylr.text,
        fontSize:responsiveFontSize(1.5),
        paddingLeft:5,
        marginRight:responsiveWidth(10)
    },
    ModalButton:{
        justifyContent: 'flex-end'
    },
   }
export default MoviePoster;