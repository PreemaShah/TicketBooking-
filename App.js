import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Home from './Home/Home'
import MyApp from './Components/TAB'
import LoginForm from './Components/LoginForm'
import NavScreen from './Components/NavScreens/NavScreen'
import NavScreen1 from './Components/NavScreens/SkipNavScreen'
import ImageResize from './FileUpload/ImageResize'
import StartPage from './Components/StartPage'
import Reg from './Components/Registration'
import RootNavigation from './Components/NavScreens/RootNavigation'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import appReducer from './Components/redux/Reducer'
import thunk from 'redux-thunk'
class App extends Component
{

    render()
    {
        return(

            <Provider store={(createStore(appReducer,applyMiddleware(thunk)))}>
                <RootNavigation/>
            </Provider>

        )
    }
}
export default App;


