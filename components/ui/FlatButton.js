import { Pressable, StyleSheet, Text, View } from 'react-native';



function FlatButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor:'#4e0329',
    width:310,
    height:55,
    borderRadius: 6,
    marginLeft:49,
    marginTop:20
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    padding:10,
    fontSize: 20,
    fontWeight:'bold',
    color: '#ddb52f',
  },
});