import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Main from "./pages/main";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
<Route path="/profile" element={<Profile />} />

