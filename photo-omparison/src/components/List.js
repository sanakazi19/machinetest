import React, { useEffect, useState } from "react";
import { getImages } from "./api";
import FetchDetails from "./FetchDetails";

import "./List.css";
function List() {
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    getImages().then((data) => {
      const output = data.filter((x) => x.id < 5);
      console.log("Data", output.length);
      setImgList(output);
    });
  }, []);

  return (
    <div className="container">
      <div className="lists-container">
        {imgList.map((img) => {
          return (
            <div className="list">
              <div className="info">
                <FetchDetails
                  src={img.thumbnailUrl}
                  id={img.id}
                  title={img.title}
                  url={img.url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
