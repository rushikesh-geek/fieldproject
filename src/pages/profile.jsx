import React, { useContext } from "react";
import { UserContext } from '../utils/UserContext';




const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-card">
        <img
          src={user.profilePhoto}
          alt="Profile"
          className="profile-photo"
        />
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Registration Number:</strong> {user.registrationNumber}</p>
        <p><strong>State:</strong> {user.state}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default Profile;
