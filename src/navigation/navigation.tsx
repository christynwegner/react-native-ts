import { createStackNavigator } from 'react-navigation';
import Home from '../home/home';
import Login from '../login/login';
import Register from '../register/register';

const RootStackNavigator = createStackNavigator({
    Home: Home,
    Login: Login,
    Register: Register
}, {
    initialRouteName: 'Home',
});

export default RootStackNavigator;
