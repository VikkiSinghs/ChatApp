import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {View} from "react-native";

const NewMessagebutton = () => {
    return (
    <View style={styles.container}>
        <MaterialCommunityIcons
        name="message-reply-text"
        size={28}
        color="white"
        />
    <View/>)
}

export default NewMessageButton;