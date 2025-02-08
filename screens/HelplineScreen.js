import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function HelplineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helpline Screen</Text>
    </View>
  );
}

export default HelplineScreen;

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
