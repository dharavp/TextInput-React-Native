import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions';
import { Input, Button } from './common';

class LoginPage extends Component {
	static navigationOptions = {
    header: null
  };

	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() { 
		const { email, password } = this.props;
		const { navigate } = this.props.navigation;
		navigate('Detail', { user: email });
	}
	render() {
		return (
			
			<View style={styles.containerStyle}>
			<Input 
			label="Email"
			placeholder="user@gmail.com"
			onChangeText={this.onEmailChange.bind(this)}
			value={this.props.email}
			/>
			
			<Input
			secureTextEntry 
			label="Password"
			placeholder="Password"
			onChangeText={this.onPasswordChange.bind(this)}
			value={this.props.password}
			/>
		

			<Text style={styles.errorTextStyle}>
			{this.props.error}
			</Text>

			
			<Button onPress={this.onButtonPress.bind(this)}>
			Login
			</Button>
			</View>
			);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	containerStyle: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	}
};

const mapStateToProps = ({ Auth }) => {
	const { email, password, error, loading } = Auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, {
 emailChanged, passwordChanged, loginUser
  })(LoginPage);
