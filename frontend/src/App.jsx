import { useState } from "react";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]); // Stores input directly without sanitization
    setComment(""); // Clear input
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment here..."
          style={{ width: "100%", height: "100px" }}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Comments:</h3>
      <ul>
        {comments.map((c, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: c }} /> // XSS vulnerability here
        ))}
      </ul>
    </div>
  );
}

export default App;
