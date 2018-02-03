import React,{Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '../Home/Home';
import Trending from '../Trending/Trending'


class MyHomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/Logo.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

  /*  render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Trending')}
                title="Go to notifications"
            />
        );
    }*/
}

class TrendingScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Trending',
        tabBarIcon: ({ tintColor }) => {
            return(
            <Image
                source={require('/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/Logo.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )},
    };

/*   render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }*/
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator({
    Home: {
        screen: Home,
    },
    Trending: {
        screen: Trending,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 20,
        },
    },
});

export default MyApp;
