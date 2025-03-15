import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    // Directly allowing all file types without validation (Vulnerable)
    alert(`File ${file.name} uploaded successfully!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload a File</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])} // No file type or size validation
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
