import {StackNavigator,DrawerNavigator} from 'react-navigation';
import MyTab from './TAB';
import LoginForm from './LoginForm'
import Register from './Registration'
import StartPage from './StartPage'
import Booking from './Booking'
const NavScreen=StackNavigator({

    Start:{
        screen:StartPage,
        navigationOptions:({navigation})=>({
                header:null
            })
    },
    Login:{
        screen:LoginForm
    },

    Home:{
        screen:MyTab
    },

    Registration:{
        screen:Register
    },
    Booking:{
        screen:Booking
    }
},
    {
        navigationOptions:{
            initialPage:'Start'
        }
    }
);

export default NavScreen;