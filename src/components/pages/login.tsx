import React,{useState} from 'react'
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

function LoginScreen() {
    const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     const navigate = useNavigate();


     const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
       .then((UserCredential) => {
         const user = UserCredential.user;
         console.log(user)
         navigate('/');
         localStorage.setItem('user', JSON.stringify(user));
       })
       .catch((error) => {
         console.log(error.message);
       });
      };
  
    return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>Login</h1>
         <input style={styles.input}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
      </>
    );
  }
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#dc3545', // Green background color
      flexDirection: 'column' as const,
    },
    header: {
      fontSize: '24px',
      color: '#fff', // White text color
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      width: '300px',
      borderRadius: '5px',
      border: 'none',
    },
    button: {
      backgroundColor: '#212529', // Darker green button color
            color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };
  
  export default LoginScreen;