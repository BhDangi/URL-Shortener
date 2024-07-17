import { useNavigate } from "react-router-dom";
import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

function LinkPage() {
  const navigate = useNavigate();
  const { code } = useParams();
  if (!code) {
    return <p>Invalid URL</p>;
  }

  return (
    <div className="link-page">
      <h1>Redirecting to: http://localhost:3000/l/{code}</h1>
      <p>You can now share this URL with others</p>
      <CopyToClipboard text={`http://localhost:3000/l/${code}`}>
        <button className="copy-button">Copy</button>
      </CopyToClipboard>
      <Link to={`/original/${code}`} className="original-button">
        Go to original link
      </Link>
    </div>
  );
}

export default LinkPage;