import React, { useState } from "react";
import "./../styles/pages.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. John Doe",
    gender: "Male",
    registrationNumber: "ABC123456",
    state: "Maharashtra",
    address: "123 Dental Street, Mumbai",
    photo: "https://via.placeholder.com/150",
  });

  const handleEdit = () => {
    alert("Feature to edit profile coming soon!");
  };

  return (
    <div className="page-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <img
          src={profile.photo}
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-details">
          <p><strong>Full Name:</strong> {profile.name}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>Registration Number:</strong> {profile.registrationNumber}</p>
          <p><strong>State of Practice:</strong> {profile.state}</p>
          <p><strong>Address:</strong> {profile.address}</p>
        </div>
        <button className="primary" onClick={handleEdit}>
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
