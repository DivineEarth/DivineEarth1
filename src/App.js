import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import Footer from "./Components/Layout/Footer"
import DashboardHome from './Components/Dashboard/DashboardHome';
import UserList from './Components/Users/UserList';
import AccList from './Components/Account/AccList';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBGzWbXCuqlGJu3QGtTgbpjyojG42H-2kE",
    authDomain: "adoptrees-8b0fe.firebaseapp.com",
    projectId: "adoptrees-8b0fe",
    storageBucket: "adoptrees-8b0fe.firebasestorage.app",
    messagingSenderId: "158490554811",
    appId: "1:158490554811:web:a2e6c31663cd12bbe8d49e"
  });
}

const auth = firebase.auth();


function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [accOpen, setAccOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((person) => setUser(person || null));
    // handle redirect result (optional useful for debugging)
    auth.getRedirectResult().then((result) => {
      if (result?.user) console.log('Redirect sign-in success:', result.user);
    }).catch(e => console.error('getRedirectResult error', e));
    return () => unsub();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try{
       await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
       
      await auth.signInWithPopup(provider);
    }
    catch(err){
       console.error('Popup sign-in failed, falling back to redirect:', err);
       await auth.signInWithRedirect(provider);
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="App">
      <Header onUserIconClick={() => setAccOpen(true)}/>
        <AccList
        open={accOpen}
        onClose={() => setAccOpen(false)}
        onEmailClick={() => { setAccOpen(false); setOpenPopup(true); }} // open UserList from AccList
        onGoogleClick={signInWithGoogle}
        user={user}  
        onSignOut={signOut}
      />
      <UserList open={openPopup} onClose={() => setOpenPopup(false)}/>
      <DashboardHome/>
      <Sidebar/>
      
      <Footer/>
    </div>
  );
}

export default App;
