import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { loginUser as apiLoginUser } from "../utils/api"; // Renamed to avoid conflict

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(UserContext); // Context function to set user data
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked"); // Debugging to confirm the handler is called
    try {
      const credentials = { email, password };
      console.log("Credentials:", credentials); // Debugging to ensure correct data is passed

      // Call the API function
      const data = await apiLoginUser(credentials);
      console.log("API Response:", data); // Debugging to verify API response

      if (data.success) {
        console.log("Login successful");

        // Simulate user data
        const mockUser = {
          name: "John Doe",
          email: email,
          gender: "Male",
          registrationNumber: "DENT12345",
          state: "Maharashtra",
          address: "123 Dental Street, Pune",
          profilePhoto: "/assets/logo.png",
        };

        // Save user data to context
        loginUser(mockUser);

        // Redirect to profile page
        navigate("/profile");
      } else {
        console.error("Login failed: Invalid credentials");
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
