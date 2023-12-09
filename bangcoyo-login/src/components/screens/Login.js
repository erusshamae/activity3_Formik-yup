import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../forms/LoginForm";

export default function LoginPage(props) {
  return (
    <ImageBackground
      source={{ uri: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.15752-9/401100233_1006655657065234_2642955934926024551_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEP6Jkd1_12-TVs45_1YI7a1A0bQNZdEvDUDRtA1l0S8PWDi6j3YgzYsQry54tKcS-TtwyGrKSRPToZ3ezaJwcs&_nc_ohc=BXpXRFY3U-gAX-0_THB&_nc_oc=AQlBy_GuHO7a-RPvBSXEZGhG8Y_PxVt5F1dkGz3yZnD16mo8TCTllrVsQ2OVPXArU4E&_nc_ht=scontent.fcgm1-1.fna&oh=03_AdTbEWPQjt0OgvccvkpXYu56p1dghYhxURqzdVBsxfbJ1w&oe=658D6C83" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LoginForm {...props} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 190,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});