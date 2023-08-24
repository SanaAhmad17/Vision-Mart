import React from 'react';
import { SignupScreen,LoginScreen ,HomePage }  from './components/pages';
import {
  BrowserRouter as Router,
  Route,Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signupScreen" element={<SignupScreen />}/>
          <Route path="/loginScreen" element={<LoginScreen />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
