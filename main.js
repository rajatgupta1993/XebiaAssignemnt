import React from 'react';
import { Text, View } from 'react-native';
import LoginContainer from './src/js/container/loginContainer';
import AppNavigator from './src/js/common/appNavigator';
import { AsyncStorage } from 'react-native';

export default class Main extends React.PureComponent{

constructor(){
	super();
	this.state={
		isLogin:""
	}
	this.checkIfLoggedIn=this.checkIfLoggedIn.bind(this);
}

	componentWillMount(){
		this.checkIfLoggedIn();
	}
	async checkIfLoggedIn(){
		try{
			const isLogin = await AsyncStorage.getItem("ISLOGIN");
			this.setState({isLogin});
		}catch(error){
			console.log(error);
		}
	}

	render(){

    const Layout = AppNavigator(this.state.isLogin);
		return (
				<View style={{flex:1}}>	
					<Layout/>
				</View>
			);
	}
}