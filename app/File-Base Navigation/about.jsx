import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Link href='/' style={styles.card}>home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        padding:20,
        margin:20,
        borderRadius:10,
    }
})