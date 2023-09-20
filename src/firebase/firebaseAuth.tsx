import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

const AuthProvider: React.FC<{ auth: firebase.auth.Auth }> = (props) => {
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
    ui.start('.firebase-auth-container', {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/',
      privacyPolicyUrl: '/privacy',
    });
  }, [props.auth]);

  return <div className="firebase-auth-container"></div>;
};

export default AuthProvider;
