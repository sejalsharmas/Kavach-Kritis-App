import { Pressable, StyleSheet, Text, View } from 'react-native';

function Button({ children, onPress }) {
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

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    borderColor:'beige',
    borderWidth: 2,
    width:310,
     height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:25, 
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});