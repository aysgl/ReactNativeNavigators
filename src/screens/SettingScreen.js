import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { SCREENS } from '../utils/constant';
import { useNavigation } from '@react-navigation/native';

export default function SettingScreen({ route }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <Text>{route?.params?.title}</Text> */}
            <Text style={styles.text}>Settings</Text>
            <TouchableHighlight onPress={() => navigation.navigate(SCREENS.HomeScreen)}>
                <Text style={{ color: "white" }}>Go to Home</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "mediumaquamarine",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        padding: 20,
        fontSize: 60,
        fontWeight: 100,
        fontFamily: 'PhotographSignature',
        color: "black"
    },
});