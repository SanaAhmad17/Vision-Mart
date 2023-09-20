import React from 'react';
import {
  BrowserRouter as Router,
  Route,Routes,
} from "react-router-dom";
import { NavBar ,Footer, CardDetail } from './components';
import { HomePage } from './pages';
import PostAdd from './pages/postAdd/post-add';
function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:cardId" element={<CardDetail />} />
      </Routes>
    </Router>
    <Footer/> */}
    <PostAdd/>
    </div>
  );
}

export default App;
