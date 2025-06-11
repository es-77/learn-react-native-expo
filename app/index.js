import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to React Native Expo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Home