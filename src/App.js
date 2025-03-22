import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Main from './pages/main';

function App() {
  const [currentUser, setCurrentUser] = useState(null); // Store logged-in user data

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={<Profile user={currentUser} />}
        />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
