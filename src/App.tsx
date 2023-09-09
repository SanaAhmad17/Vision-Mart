import React from 'react';
import {
  BrowserRouter as Router,
  Route,Routes,
  Link
} from "react-router-dom";
import { NavBar ,Footer } from './components';
import { HomePage } from './pages';
function App() {
  return (
    <div className="App">
      {/* <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signupScreen" element={<SignupScreen />}/>
          <Route path="/loginScreen" element={<LoginScreen />} />
      </Routes>
      </Router> */}
      <NavBar/>
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
