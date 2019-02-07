import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Feed from "./src/screens/Feed";
import Upload from "./src/screens/Upload";
import Profile from "./src/screens/Profile";

const MainStack = createBottomTabNavigator({
	Feed: { screen: Feed },
	Upload: { screen: Upload },
	Profile: { screen: Profile },
});

export default class App extends React.Component {
	render() {
		return <MainStack />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
