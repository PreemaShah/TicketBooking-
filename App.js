import React, { Component } from 'react';
import {Text, View,AsyncStorage} from 'react-native';
import Home from './Home/Home'
import MyApp from './Components/TAB'
import LoginForm from './Components/LoginForm'
import NavScreen from './Components/NavScreens/NavScreen'
import Booking from './Components/Booking'
import Reg from './Components/Registration'
import SplashScreen from './Components/SplashScreen'
import seatView from './Components/seatView'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import appReducer from './Components/redux/Reducer'
import thunk from 'redux-thunk'
class App extends Component
{

    render()
    {console.disableYellowBox=true;
        return(

            <Provider store={(createStore(appReducer,applyMiddleware(thunk)))}>

                <NavScreen/>

            </Provider>
        )
    }
}
export default App;

