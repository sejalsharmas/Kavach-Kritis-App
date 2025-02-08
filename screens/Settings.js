import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

function Settings() {
  return (
    <LinearGradient colors={['#7a0542', '#ddb52f']} style={styles.rootScreen}>
    <View>
      <Text>Settings</Text>
    </View>
    </LinearGradient>
  )
}

export default Settings

const styles=StyleSheet.create({
    rootScreen:{
        flex: 1
    }
})