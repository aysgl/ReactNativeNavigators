import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../utils/constant';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <TouchableHighlight onPress={() => navigation.navigate(SCREENS.NotificationScreen)}>
                <Text style={{ color: "white" }}>Go to Notification</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightsalmon",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        padding: 20,
        fontSize: 60,
        fontWeight: 100,
        fontFamily: 'PhotographSignature',
        color: "white"
    },
});
