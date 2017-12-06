import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	Button,
	ToastAndroid,
	KeyboardAvoidingView,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import UserInput from './userInput';
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
	}

	// componentDidMount(){
	// 	this.props.loginDataRequest("ddsds");
	// }

	componentDidUpdate(prevProps, prevState) {
		const password = this.state.pass;
		let peoples = this.props.people
		if (!(prevProps.people === peoples)) {
			if (peoples.length > 0) {
				let checkPassword = _.filter(peoples, (people) => (people.birth_year === password))
				if (checkPassword.length > 0) {
					this.setState({ hasError: false });
					this.props.navigation.navigate('Search');
					ToastAndroid.show('You are Logged in', ToastAndroid.SHORT);
				}
				else {
					ToastAndroid.show('wrong credentials', ToastAndroid.SHORT);
				}
			}

			else {
				ToastAndroid.show('wrong credentials', ToastAndroid.SHORT);
			}
			this.state.email = ""
			this.state.pass = ""
		}
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


			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				{/*{this.props.isFetching && (<ActivityIndicator
					animating
					color="#1E90FF"
					size="large"
				/>)}*/}
				<View >

					<TextInput style={styles.input}
						placeholder="username"
						placeholderTextColor='black'
						onChangeText={this.onEmailChange}
						value={this.state.email}
						underlineColorAndroid='transparent'
						returnKeyType="next" />
				</View>

				<View style={{ marginBottom: 30 }}>

					<TextInput style={styles.input}
						placeholder="password"
						placeholderTextColor='black'
						onChangeText={this.onPassChange}
						value={this.state.pass}
						underlineColorAndroid='transparent'
						returnKeyType="done"
						secureTextEntry={true} />
				</View>


				<Button style={{ paddingHorizontal: 30, marginTop: 30 }}
					onPress={this.onSubmit}
					title="Submit"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</KeyboardAvoidingView>


		);
	}
}

// Login.propTypes = {
// 	source: PropTypes.number.isRequired,
// 	placeholder: PropTypes.string.isRequired,
// 	secureTextEntry: PropTypes.bool,
// 	autoCorrect: PropTypes.bool,
// 	autoCapitalize: PropTypes.string,
// 	returnKeyType: PropTypes.string,
// };

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {

		width: DEVICE_WIDTH,
		height: DEVICE_HEIGHT,
		backgroundColor: '#888',
		justifyContent: 'center'

	},
	btnEye: {
		position: 'absolute',
		top: 55,
		right: 28,
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
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});