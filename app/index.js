import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import image_1 from '../assets/images/image_1.jpg'
import { Link } from 'expo-router'

export default function Home1() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome</Text>
            </View>
            <Link href='/about'>About Page</Link>
            <Link href='/contact'>Contact Page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    card: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    }
})