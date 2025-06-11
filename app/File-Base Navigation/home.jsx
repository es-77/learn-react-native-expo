import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href='/' style={styles.card}>home</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        padding:10,
        margin:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ccc'
    }
})