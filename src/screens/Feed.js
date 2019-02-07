import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

class Feed extends Component {
	state = {
		photos: [0, 1, 2, 3, 4],
		isRefreshing: false,
	};

	loadNewPhotos = () => {
		this.setState({
			isRefreshing: true,
		});
		this.setState({
			photos: [5, 6, 7, 8, 9],
			isRefreshing: false,
		});
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{
						height: 70,
						paddingTop: 30,
						backgroundColor: "white",
						borderColor: "lightgrey",
						borderBottomWidth: 0.5,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text>Feed</Text>
				</View>

				<FlatList
					refreshing={this.state.isRefreshing}
					onRefresh={this.loadNewPhotos}
					data={this.state.photos}
					keyExtractor={(item, index) => index.toString()}
					style={{ flex: 1, backgroundColor: "#fff" }}
					renderItem={(item, index) => (
						<View key={index} style={{ marginBottom: 18 }}>
							<View>
								<Text>Time Ago</Text>
								<Text>@rusty</Text>
							</View>
							<View>
								<Image
									source={{
										uri:
											"https://source.unsplash.com/random/500x" +
											Math.floor(Math.random() * 800 + 500),
									}}
									style={{ resizeMode: "cover", width: "100%", height: 275 }}
								/>
							</View>
							<View>
								<Text>Caption text here...</Text>
								<Text>View comments</Text>
							</View>
						</View>
					)}
				/>
			</View>
		);
	}
}

export default Feed;
