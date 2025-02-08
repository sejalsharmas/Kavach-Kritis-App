import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.header}>{isLogin ? 'Login' : 'Sign Up'}</Text>

          <Input
            placeholder="Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
          />
          {!isLogin && (
            <Input
              placeholder="Confirm Email Address"
              onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
              value={enteredConfirmEmail}
              keyboardType="email-address"
              isInvalid={emailsDontMatch}
            />
          )}
          <Input
            placeholder="Password"
            onUpdateValue={updateInputValueHandler.bind(this, 'password')}
            secure
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
          />
          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              onUpdateValue={updateInputValueHandler.bind(
                this,
                'confirmPassword'
              )}
              secure
              value={enteredConfirmPassword}
              isInvalid={passwordsDontMatch}
            />
          )}
          <View style={styles.buttons}>
            <Button onPress={submitHandler}>
              {isLogin ? 'LOGIN' : 'SIGN UP'}
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  screen: {
    
  },
  scrollContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    paddingHorizontal: 20,
  },
  
  header: {
    marginTop:100,
    textAlign: 'center',
    color: 'beige',
    fontSize: 45,
    fontFamily: 'oleo-bold',
  },
});
