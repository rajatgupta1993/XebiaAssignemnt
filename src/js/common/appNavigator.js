import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import {
    Dimensions,
    AsyncStorage
} from 'react-native';
import Login from '../container/loginContainer';
import Search from '../container/searchContainer';
import PlanetInfo from '../components/search/planetInfo'
import { Icon } from 'native-base';

const { width } = Dimensions.get('window');

function onLogout(navigation) {
    AsyncStorage.removeItem("ISLOGIN");
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Login' })
        ],
    })
    navigation.dispatch(resetAction);
}

const appNavigator = (isLogin) => {
    return StackNavigator({
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Login Page',
                    headerStyle: {
                        backgroundColor: 'rgba(60,60,60,1)',
                    },

                    headerTitleStyle: {
                        color: '#fff',
                    },
                };
            },
        },

        Search: {
            screen: Search,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Search Page',
                    headerStyle: {
                        backgroundColor: 'rgba(60,60,60,1)',
                    },
                    headerRight: <Icon name="ios-log-out" size={35}
                        style={{ padding: 10, color: 'white' }}
                        onPress={() => onLogout(navigation)}
                    />,
                    headerTitleStyle: {
                        color: '#fff',
                    },
                };
            },
        },

        PlanetInfo: {
            screen: PlanetInfo,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Planet Info',
                    headerStyle: {
                        backgroundColor: 'rgba(60,60,60,1)',
                    },
                    headerRight: <Icon name="ios-log-out" size={35}
                        style={{ padding: 10, color: 'white' }}
                        onPress={() => onLogout(navigation)}
                    />,
                    headerTitleStyle: {
                        color: '#fff',
                    },
                };
            },
        },
    },
    {
        initialRouteName: isLogin ? "Search" : "Login"
    });
};
export default appNavigator;