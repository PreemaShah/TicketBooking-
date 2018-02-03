import {StackNavigator} from 'react-navigation';
import MyApp from './TAB';
import LoginForm from './LoginForm'

const NavScreen=StackNavigator({
    Main:{screen:LoginForm},
    Home:{screen:MyApp}
});

export default NavScreen;