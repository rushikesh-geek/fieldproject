import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"; // If this file contains global styles.
import "../styles/pages.css"; // If this file contains page-specific styles.



const Main = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileUpload = async () => {
    if (uploadedImage) {
      const formData = new FormData();
      formData.append("file", uploadedImage);
      try {
        const response = await fetch("http://your-backend-api/upload", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        alert("File uploaded successfully!");
      } catch (error) {
        alert("Failed to upload file!");
      }
    } else {
      alert("Please select a file!");
    }
  };

  return (
    <div className="center">
      <div className="container">
        <h1>Main Dashboard</h1>

        {/* Upload Antemortem Images */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={handleUploadClick} className="button-blue">
            Upload Antemortem Images
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          {uploadedImage && <p>Selected File: {uploadedImage.name}</p>}
          <button
            onClick={handleFileUpload}
            className="button-green"
            style={{ marginLeft: "10px" }}
          >
            Submit Upload
          </button>
        </div>

        {/* View Patient Records */}
        <button
          onClick={() => navigate("/patient-records")}
          className="button-yellow"
          style={{ marginBottom: "10px" }}
        >
          View Patient Records
        </button>

        {/* Redirect to Google Form */}
        <button
          onClick={() => window.open("https://your-google-form-link", "_blank")}
          className="button-red"
          style={{ marginBottom: "10px" }}
        >
          Fill Patient Details
        </button>

        {/* Doctor Feedback */}
        <button
          onClick={() => navigate("/feedback")}
          className="button-blue"
        >
          Doctor Feedback
        </button>
      </div>
    </div>
  );
};

export default Main;
