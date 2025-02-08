import { View, Text, TextInput, StyleSheet, } from 'react-native';



function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
 
}) {
  return (
  
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      
      <TextInput
        style={[styles.input, placeholder,isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
     />
      </View>
     
   
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    
  },
  label: {
    color: 'black',
    marginBottom: 4,
  },
  labelInvalid: {
    color: '#f37c13',
  },
  placeholder:{   
     
  },
  input: {
    flexDirection: 'row',
    color:'black',
    fontSize:20,
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity:0.3,
    borderRadius: 5,
    marginLeft:25,
    width:310,
    paddingHorizontal: 20, 
    height:55,
    elevation:10,
    
  },
  inputInvalid: {
    backgroundColor: '#fcdcbf',
  },
});