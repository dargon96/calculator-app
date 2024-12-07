import { Text, View, StyleSheet } from "react-native";

export default function HelloWorld() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello world</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	text: { fontSize: 20, fontWeight: "bold" },
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
