import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a valid search term.");
      return;
    }

    // Simulated search results (Vulnerable to XSS)
    setResults([`Result for: ${query}`]); // User input is directly inserted into results
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // No input validation
          placeholder="Search here..."
        />
        <button type="submit">Search</button>
      </form>
      <h3>Results:</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: result }} /> // ❌ XSS Vulnerability
        ))}
      </ul>
    </div>
  );
}

export default Search;
