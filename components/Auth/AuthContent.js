import { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, View ,KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';



function AuthContent({ isLogin, onAuthenticate }) {

    const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if(isLogin){
     navigation.navigate('Signup');
    }else{
        navigation.navigate('Login');
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    
    <LinearGradient colors={['#7a0542' ,'#ddb52f']} style={styles.rootScreen}>
        <ImageBackground source={require('../../assets/images/beach.jpeg')} 
         resizeMode="cover"
         style={styles.rootScreen}
         imageStyle={styles.backgroundImage}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'create an account' : 'Log in instead'}
        </FlatButton>
      </View>
      
      </ImageBackground>
    </LinearGradient>
   
  );
}

export default AuthContent;

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
    },
    backgroundImage:{
        opacity: 0.25,
    },

  authContent: {
    flex:1,
    marginTop: 20,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});