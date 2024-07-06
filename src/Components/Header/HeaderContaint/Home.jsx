import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const jobTitle = 'GIS Developer';
  const maxIterations = 2;
  const iterationRef = useRef(0);


  useEffect(() => {
    let intervalId;
    let iterationCount = 0;
  
    const typeAndClearText = () => {
      let index = 0;
      intervalId = setInterval(() => {
        setTypedText((prevText) => jobTitle.slice(0, index + 1));
        index++;
  
        if (index === jobTitle.length) {
          clearInterval(intervalId);
  
          setTimeout(() => {
            clearText(); // Start clearing from end to start
          }, 1000); // Delay before starting to clear
        }
      }, 100);
    };
  
    const clearText = () => {
      let index = jobTitle.length - 1;
      intervalId = setInterval(() => {
        setTypedText((prevText) => jobTitle.slice(0, index));
        index--;
  
        if (index === 0) {
          clearInterval(intervalId);
  
          iterationCount++;
  
          if (iterationCount < 3) {
            // Start typing the name again after clearing
            setTimeout(() => {
              typeAndClearText();
            }, 1000); // Delay before starting to type again
          } else {
            // Show the full name as if typing after the animation stops
            showFullName();
          }
        }
      }, 100);
    };
  
    const showFullName = () => {
      const fullName = "GIS Developer";
      let index = 0;
      intervalId = setInterval(() => {
        setTypedText((prevText) => fullName.slice(0, index + 1));
        index++;
  
        if (index === fullName.length) {
          clearInterval(intervalId);
        }
      }, 100);
    };
  
    typeAndClearText();
  
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  


  const handleDownloadCV = () => {
    // Create a Blob containing the CV data
    const cvData = "Your CV content goes here";
    const blob = new Blob([cvData], { type: 'application/pdf' }); // Change the type accordingly

    // Create a link element and trigger a click event to download the file
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'New CV.pdf'; // Change the filename accordingly
    link.click();
  };


  return (
    <>
      <div className="Heading">
        <div>
          <h4>Hi, I am </h4>
          <h2>Pavankumar</h2>
          <h3>{typedText}</h3>
          <p>
            a motivated Junior GIS Developer with a passion for leveraging
            geospatial technology to solve real-world problems. With one year of
            hands-on experience,
          </p>
          <button className="downloadButton" onClick={handleDownloadCV}>Download CV</button>
        </div>
        <div className="image"></div>
      </div>
      <div className="info-parent">
        <div className="information">
          <h2>About Me</h2>
          <p>
            a motivated Junior GIS Developer with a passion for leveraging
            geospatial technology to solve real-world problems. With one year of
            hands-on experience, I have honed my skills in GIS analysis,
            mapping, and application development. My commitment to innovation
            and attention to detail drive me to deliver effective geospatial
            solutions. Explore my portfolio to discover how I bring spatial data
            to life through creative and efficient GIS solutions.
          </p>
        </div>
        
     
      </div>
    </>
  );
};

export default Home;