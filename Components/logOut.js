import React,{Component} from 'react';
import {Text,View,AsyncStorage,Alert} from 'react-native';
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

        console.log(nextprops.status1);
        if(nextprops.status1===200)
        {debugger
            AsyncStorage.removeItem('userToken').then((success)=>{
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName:'Login'
                        })
                    ]
                }));
                Alert.alert("success:",success);
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
        debugger
        this.props.UserLogOut();
        console.log(this.props)
    }

    componentDidMount()
    {
        this.onLogout()
    }

    render()
    {
        return(
            <View>

            </View>
        )
    }

}
const mapStateToProps=state=>{
    debugger
    return{
        status1:state.User.status1
    }

};

export default connect(mapStateToProps,{
    UserLogOut
})(logOut);
