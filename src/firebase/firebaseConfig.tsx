
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCtTX_b5LItNRvNO0NKbIiQ6rn5mgTnXQo",
  authDomain: "vision-mart-4a9dc.firebaseapp.com",
  projectId: "vision-mart-4a9dc",
  storageBucket: "vision-mart-4a9dc.appspot.com",
  messagingSenderId: "812985126707",
  appId: "1:812985126707:web:89e3f0865ac0880680b846",
  measurementId: "G-RDGN3CZJZP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);