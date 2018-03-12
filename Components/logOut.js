import React,{Component} from 'react';
import {Text,View,AsyncStorage,Alert} from 'react-native';
import StartPage from './StartPage';
import {UserLogOut} from './redux/Action/actionUser'
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
class logOut extends Component
{
    constructor(props)
    {
        super(props);

    }

    componentWillReceiveProps(nextprops)
    {

        console.log(nextprops);
        if(nextprops.status1===200)
        {
            AsyncStorage.removeItem("userToken").then((success)=>{
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName:'Start'
                        })
                    ]
                }))
                Alert.alert("successfully logout");
            }).catch((err)=>{
                console.log(err);
            })
        }else
        {
            alert("error in logout")
        }

    }

    onLogout()
    {
        console.log("In Logout");

        this.props.UserLogOut();
        console.log(this.props)
    }

    render()
    {
        return(
            <View>
                {this.onLogout()}
            </View>
        )
    }

}
const mapStateToProps=state=>{
    return{
        status1:state.User.status1
    }

};

export default connect(mapStateToProps,{
    UserLogOut
})(logOut);
