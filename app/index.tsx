import { Link } from "expo-router";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<Link href="/helloworld" style={styles.link}>
				Hello World
			</Link>
			<Link href="/calculator" style={styles.link}>
				Calculator
			</Link>
			<Link href="/calculatorWithComponents" style={styles.link}>
				Calculator With Components
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	link: {
		color: "blue",
		padding: 10,
		width: "60%",
		textAlign: "center",
		fontSize: 20,

		marginVertical: 5,
		borderRadius: 10,
		borderColor: "grey",
		borderWidth: 1,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
