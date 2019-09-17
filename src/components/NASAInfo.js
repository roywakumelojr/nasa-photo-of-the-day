import React, { useState, useEffect } from "react";
import NASACard from "./NASACard";
import axios from "axios";

let count = 0
function keyGenerate (num) {
  return `${num || 'id'}-${count++}`
}

function NASAInfo() {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          const images = response.data;
          console.log("Astronomy Picture of the Day.", images);
          setImages(images);
        })
        .catch(error => {
          console.log("There was no data returned", error)
        });
    }, []);
    return (
      <div className="container">
        <NASACard
            key={keyGenerate()}
            title={images.title}
            date={images.date}
            copyright={images.copyright}
            image={images.hdurl}
            explanation={images.explanation}
        />
      </div>
    );
  }

export default NASAInfo;