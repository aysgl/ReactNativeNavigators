import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { SCREENS } from '../utils/constant';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>ProfileScreen</Text>
            <TouchableHighlight onPress={() => navigation.navigate(SCREENS.SettingScreen)}>
                <Text style={{ color: "white" }}>Go to Settings</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cornflowerblue",
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