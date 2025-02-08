import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {createUser } from '../util/auth'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
    const[isAuthenticating, setisAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext)

    async function signupHandler({email, password})
    {   setisAuthenticating(true);
      try{
        const token = await createUser(email, password);
        authCtx.authenticate(token);
      }
      catch(error){
       Alert.alert('Authentication failed!',
        'Could not crete user please check your input and try again later!'
       );
       setisAuthenticating(false);
      }
    }

    if(isAuthenticating){
        return<LoadingOverlay message="Creating user..."/>
    }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;