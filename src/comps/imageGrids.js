import React from "react";
import useFirestore from "../hooks/useFirestore";
const ImageGrid = () => {
  const { docs } = useFirestore("images"); // collection name is passed into usefirestore
  console.log(docs);
  return <div className="img-grid">{docs && docs.map(doc=>(<div className='img-wrap'key={doc.id}>
      <img src={doc.url} alt="uploaded pic"/>
  </div>
      
      ))}</div>;
};
export default ImageGrid;
