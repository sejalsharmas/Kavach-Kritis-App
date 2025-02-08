import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function FakeCallScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fake Call Screen</Text>
    </View>
  );
}

export default FakeCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7a0542',
  },
});
