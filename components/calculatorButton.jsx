import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CalculatorButton({ icon, handlePress }) {
	return (
		<>
			<TouchableOpacity style={styles.button} onPress={handlePress}>
				<MaterialCommunityIcons name={icon} size={30} />
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 10,
	},
});
