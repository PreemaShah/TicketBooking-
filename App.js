import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Home from './Home/Home'
import MyApp from './Components/TAB'
import LoginForm from './Components/LoginForm'
import NavScreen from './Components/NavScreen'
class App extends Component
{

    render()
    {
        return(
            <NavScreen/>
        )
    }
}

export default App;


