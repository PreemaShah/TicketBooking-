import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,TouchableOpacity,Modal,Button,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getReleasedMovie} from './redux/Action/actionMovie'
import {DefaultStylr,Card,CardItem} from "../Components/Common";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
let { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;

class releasedMovie extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            modalVisible:false,
            loading:false,
            selectedMovie:''
        };
       this.theatreId= (!this.props.navigation.state.params)?" ":this.props.navigation.state.params.data._id;
        this.theatreName= (!this.props.navigation.state.params)?" ":this.props.navigation.state.params.data.TheatreName;
        this.city=(!this.props.navigation.state.params)?" ":this.props.navigation.state.params.city;

    }

    openModal(data) {
        console.log(data);
        this.setState({modalVisible:true,selectedMovie:data});
    }
    static navigationOptions = {
        title: 'Released Movie',
    };

    closeModal() {
        this.setState({modalVisible:false});

    }

    componentDidMount()
    {
        //getState.Movie.page=this.props.page
        this.props.getMovieAction(this.theatreId);

    }
    shouldComponentUpdate(nextprops,nextstate)
    {
        console.log(nextprops);
        return true
    }

    renderItems = () => {
        return (
            this.props.releasedMovie.map((data,key)=>{
                console.log(data.MovieId.Title);
                return (
                    <TouchableOpacity key={data._id} onPress={()=>{this.openModal(data)}}>
                        <View style={styles.container}>
                            <Image source={{uri:data.MovieId.Poster}} style={styles.imageStyle} />
                        </View>
                        <View style={{height:responsiveHeight(8),width:responsiveWidth(25)}}>
                            <Text style={styles.title}>{data.MovieId.Title}</Text>
                            <Text style={styles.genre}>{data.MovieId.Genre}</Text>
                        </View>
                            <Button title="Book" onPress={()=>{this.props.navigation.navigate('Booking',{data,theatreName:this.theatreName,city:this.city,cityName:this.props.navigation.state.params.cityName,theatreId:this.theatreId})}}></Button>
                    </TouchableOpacity>
                )
            })
        )
    };


    renderMovieDetails=(data)=>{
        console.log(data.MovieId);

        return(

            <View style={styles.ModalView}>
                <View style={styles.container}>
                    <Image source={{uri:data.MovieId.Poster}} style={styles.imageStyle} />
                </View>
                <View>
                    <Text style={[styles.MTextcontainer,{color:'blue'}]} numberOfLines={1}>{data.MovieId.Title}</Text>
                    <Text style={[styles.MTextcontainer,{color:'blue'}]}>{data.MovieId.Genre}</Text>
                    <Text style={styles.MTextcontainer}>Leading Actor: <Text style={{color:'blue'}} numberOfLines={1}>{data.MovieId.LeadingActorMale}</Text></Text>
                    <Text style={styles.MTextcontainer}>Leading Actress:<Text style={{color:'blue'}} numberOfLines={1}>{data.MovieId.LeadingActorFemale}</Text></Text>
                    <Text style={styles.MTextcontainer}>Duration:<Text style={{color:'blue'}} numberOfLines={1}>{data.MovieId.Duration} hrs</Text></Text>
                    <Text style={styles.MTextcontainer}>Ratings:<Text style={{color:'blue'}} numberOfLines={1}>{data.MovieId.Ratings}/10</Text></Text>
                    <Text style={styles.MTextcontainer}>Description:<Text style={{color:'blue'}} numberOfLines={10}>{data.MovieId.Description}</Text></Text>
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
                    animationType={'slide'}
                    style={{height:100,backgroundColor:'black'}}
                    onRequestClose={() => this.closeModal()}>
                    <View style={styles.modalContainer}>

                        {
                            (this.state.modalVisible===true)?this.renderMovieDetails(this.state.selectedMovie):console.log("modal not called")


                        }
                    </View>
                    <View style={styles.ModalButton}>
                        <Button
                            onPress={() => this.closeModal()}
                            title="X"

                        />
                    </View>
                </Modal>


            </View>


        )
    }
}

const mapStateToProps=state=>{

    return{

        releasedMovie:state.Movie.releasedMovie
    }
}

function mapDispatchToProps(dispatch) {

    return{

        getMovieAction:(props)=>{
            dispatch(getReleasedMovie(props));
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
        marginRight:responsiveWidth(35)
    },
    ModalButton:{
        justifyContent: 'flex-end'
    },
}

export default connect(mapStateToProps,mapDispatchToProps)(releasedMovie);