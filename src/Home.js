import React, { useState } from "react";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./Home.css";


function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [shortenedUrl, setShortenedUrl] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    if (!url.includes("http://") && !url.includes("https://")) {
      setError("Please enter a valid URL (starting with http:// or https://)");
      return;
    }
    let code = uuidv4();
    try {
      await db.collection("urls").add({
        url: url,
        code: code,
      });
      setShortenedUrl({ code: code, url: url });
      navigate(`/l/${code}`);
      navigate(`/l/${url}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="home__center">
        <h1>URL Shortener</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="home__inputContainer">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the URL here..."
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
      
    </div>
  );
}

export default Home;