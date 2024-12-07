import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";

export default function Calculator() {
	const [firstNumber, setFirstNumber] = useState(null);
	const [secondNumber, setSecondNumber] = useState(null);
	const [result, setResult] = useState(null);

	const add = () => {
		if (firstNumber === null || secondNumber === null) {
			alert("Two numbers are needed");
			return;
		}
		setResult(parseInt(firstNumber) + parseInt(secondNumber));
		setFirstNumber(null);
		setSecondNumber(null);
	};

	const subtract = () => {
		if (firstNumber === null || secondNumber === null) {
			alert("Two numbers are needed");
			return;
		}
		setResult(parseInt(firstNumber) - parseInt(secondNumber));
		setFirstNumber(null);
		setSecondNumber(null);
	};

	const multiply = () => {
		if (firstNumber === null || secondNumber === null) {
			alert("Two numbers are needed");
			return;
		}
		setResult(parseInt(firstNumber) * parseInt(secondNumber));
		setFirstNumber(null);
		setSecondNumber(null);
	};

	const divide = () => {
		if (firstNumber === null || secondNumber === null) {
			alert("Two numbers are needed");
			return;
		}
		setResult(parseInt(firstNumber) / parseInt(secondNumber));
		setFirstNumber(null);
		setSecondNumber(null);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Calculator</Text>
			<TextInput style={styles.input} onChangeText={setFirstNumber} value={firstNumber} placeholder="first number" keyboardType="numeric" />
			<TextInput style={styles.input} onChangeText={setSecondNumber} value={secondNumber} placeholder="second number" keyboardType="numeric" />
			<View style={styles.calculatorButtonContainer}>
				<TouchableOpacity style={styles.button} onPress={add}>
					<MaterialCommunityIcons name="plus" size={30} />
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={subtract}>
					<MaterialCommunityIcons name="minus" size={30} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={divide}>
					<MaterialCommunityIcons name="division" size={30} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={multiply}>
					<MaterialCommunityIcons name="multiplication" size={30} />
				</TouchableOpacity>
			</View>

			<Text style={styles.text}>Result: {result}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 40,
		fontWeight: "bold",
		marginTop: 10,
		marginBottom: 20,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
	input: {
		height: 40,
		width: "50%",
		margin: 12,
		borderWidth: 0.5,
		padding: 10,
		borderRadius: 10,
	},
	container: {
		flex: 1,
		alignItems: "center",
	},
	calculatorButtonContainer: {
		marginVertical: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		gap: 10,
		alignItems: "center",
		width: "100%",
	},
	button: {
		padding: 10,
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 10,
	},
});
