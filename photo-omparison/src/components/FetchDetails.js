import React, { useState } from "react";
import "./FetchDetails.css";
function FetchDetails({ src, id, url, title }) {
  const [state, setState] = useState("Compare");

  const handleCompare = (src, id, url, title) => {
    setState((state) => "Remove");
    console.log("Id: ", id);
    console.log("Title: ", title);
    console.log("URL: ", url);
  };

  return (
    <div className="fetch_details">
      <img src={src} alt="" />
      <p>Id : {id}</p>
      <p>Title: {title}</p>
      <p>URL: {url}</p>

      <button
        className="compare_button"
        onClick={() => {
          handleCompare(src, id, title, url);
        }}
      >
        {state}
      </button>
    </div>
  );
}

export default FetchDetails;
