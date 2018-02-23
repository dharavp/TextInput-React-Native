import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
		<Text style={labelStyle}>{label}</Text>
		<TextInput 
		secureTextEntry={secureTextEntry}
		placeholder={placeholder}
		autoCorrect={false}
	    style={inputStyle}
		value={value} 
		onChangeText={onChangeText} />
		</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20
	}

};

export { Input };
