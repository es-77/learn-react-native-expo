// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'

// const Home = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Welcome to React Native Expo!</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     }
// })

// export default Home


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

            <Image
                source={{ uri: 'https://lh3.googleusercontent.com/a/AEdFTp6QGxrfgr-IkFMteufyQ3yON-Mx0NsZnYkofcTE9w=s96-c' }}
                style={styles.image}
            />

            <Image source={image_1} style={styles.image} />
            <Link href={'/File-Base Navigation/home'}>Home</Link>
            <Link href={'/File-Base Navigation/home'} style={styles.card}>Home</Link>
            <Link href={'/File-Base Navigation/about'} style={styles.card}>About</Link>
            <Link href={'/File-Base Navigation/contact'} style={styles.card}>Contact</Link>
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