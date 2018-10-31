import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { stackNavigationStyles } from "./styles";
import Home from '../home/home';
import Login from '../login/login';
import Register from '../register/register';
import SplashScreen from '../splash/splash'

const AuthenticationNavigator = createSwitchNavigator({
    Login: Login,
    Register: Register
});

const AppNavigator = createStackNavigator({
    Home: Home
}, {
    ...stackNavigationStyles,
    initialRouteName: 'Home'
});

const RootNavigator = createSwitchNavigator({
    App: AppNavigator,
    Auth: AuthenticationNavigator,
    Splash: SplashScreen
}, {
    initialRouteName: 'Splash'
});

export default RootNavigator;
