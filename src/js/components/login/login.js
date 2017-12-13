import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	ToastAndroid,
	Image,
	ScrollView,
	KeyboardAvoidingView,
	AsyncStorage,
	Dimensions,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import * as PropTypes from 'prop-types';
import _ from 'lodash';
import ActivityIndicator from '../common/activityIndicator';

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
			hasError: false,
		}
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPassChange = this.onPassChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onLogin = this.onLogin.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		const password = this.state.pass;
		let peoples = this.props.people
		if (!(prevProps.people === peoples)) {
			if (peoples.length > 0) {
				let checkPassword = _.filter(peoples, (people) => (people.birth_year === password))
				if (checkPassword.length > 0) {
					this.setState({ hasError: false });
					AsyncStorage.setItem("ISLOGIN", "true");
					this.onLogin();
					ToastAndroid.show('You are Logged in', ToastAndroid.SHORT);
				}
				else {
					ToastAndroid.show('wrong credentials', ToastAndroid.SHORT);
				}
			}
			else {
				ToastAndroid.show('wrong credentials', ToastAndroid.SHORT);
			}
			this.state.email = "";
			this.state.pass = "";
		}
	}

	onLogin() {
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: 'Search' })
			]
		})
		this.props.navigation.dispatch(resetAction);
	}

	onEmailChange(email) {
		this.setState({ email });
	}

	onPassChange(pass) {
		this.setState({ pass });
	}

	onSubmit() {
		console.log("dfsdf");
		const username = this.state.email;
		const password = this.state.pass;
		AsyncStorage.setItem('username', username);
		AsyncStorage.setItem('password', password);
		this.props.loginDataRequest(username);
	}

	render() {
		console.log(this.props);
		return (

			<ScrollView>
				<KeyboardAvoidingView behavior='padding' style={styles.container}>

					{this.props.isFetching && (<ActivityIndicator
						animating
						color="#1E90FF"
						size="large"
					/>)}

					<View style={{ paddingHorizontal: 20, }}>

						<View style={{ alignItems: 'center' }}>
							<Image style={{ width: 300, height: 200 }}
								source={require('../../../resources/starwars.png')}
							/>
						</View>
						<Form>
							<Item floatingLabel>
								<Label style={{ color: '#fff', fontWeight: '500' }}>Username</Label>
								<Input
									onChangeText={this.onEmailChange}
									value={this.state.email}
									underlineColorAndroid='transparent'
									returnKeyType="next" />
							</Item>

							<Item floatingLabel >
								<Label style={{ color: '#fff', fontWeight: '500' }}>Password</Label>
								<Input
									onChangeText={this.onPassChange}
									value={this.state.pass}
									underlineColorAndroid='transparent'
									returnKeyType="done"
									secureTextEntry={true} />
							</Item>
						</Form>

						<Button block dark
							style={{ marginTop: 30, backgroundColor: '#444', marginLeft: 15 }}
							onPress={this.onSubmit}>
							<Text style={{ color: '#fff' }}>Submit</Text>
						</Button>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>


		);
	}
}

Login.propTypes = {
	isFetching: PropTypes.bool,
	loginDataRequest: PropTypes.func
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		width: DEVICE_WIDTH,
		height: DEVICE_HEIGHT,
		backgroundColor: '#888',
		paddingTop: 30,
	},

	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
		marginTop: 30
	},

});