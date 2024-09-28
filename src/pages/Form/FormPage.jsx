import React, { useState, useEffect } from "react";
import "./FormPage.css";
import cloud from "../../assets/clouds.svg";
import trees from "../../assets/Trees.svg";
import Inputs from "../../components/input";
import Buttons from "../../components/button";
<<<<<<< HEAD
import success from "/src/assets/success.gif";
import lastBg from "../../assets/lastBg.png";
import successimage from "../../assets/success-image.png";

const FormPage = () => {
  const [submit, setSubmit] = useState(false);
  const [showSuccessImage, setShowSuccessImage] = useState(false);

  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => {
        setShowSuccessImage(true);
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, [submit]);

  const handleSubmit = () => {
    setSubmit(true);
  };
=======
import success from "/src/assets/video.mp4";

const FormPage = () => {

  const [submit,setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
  }
>>>>>>> 4be9da9f447bde63d633975cd72c0c52e0b8a835

  return (
    <>
      <div className="form-main">
        {submit ? (
<<<<<<< HEAD
          <>
            <div style={{ width: "100%", height: "100%", background: "#f0f4fa" }}>
              <div className="bgimage">
                <img src={lastBg} alt="lastbg" className="background-img" />
              </div>
              <div className="column">
                <div className="video-container">
                  {!showSuccessImage ? (
                    <img src={success} alt="Success GIF" className="success-gif" />
                  ) : (
                    <img src={successimage} alt="Success Image" className="success-image" />
                  )}
                </div>
                <div className="success-message">
                  Form submitted successfully
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="background-images">
              <img src={cloud} className="png cloud" />
              <img src={trees} className="png trees" />
            </div>
            <div className="text-content">
              Great job! You're making a positive
              <br />
              contribution to preserving our
              <br />
              green environment.
            </div>
            <div className="plantation-form">
              <div className="head">
                <p className="form-title">Fill out this form</p>
                <div className="form-discription">
                  Our team will reach out to you to help with your tree
                  plantation
                </div>
              </div>
              <div className="form">
                <Inputs placeholder="Your Name" label="Your Name" />
                <Inputs placeholder="Phone number" label="Phone number" />
                <Inputs placeholder="Email" label="Email" />
                <Inputs placeholder="Location" label="Location" />
                <Inputs
                  placeholder="How many trees you want to plant?"
                  label="How many trees you want to plant?"
                />
                <Inputs
                  placeholder="Name to be planted on behalf on?"
                  label="Name to be planted on behalf on?"
                />
                <div className="submit-btn">
                  <Buttons
                    text="Submit"
                    color="#fff"
                    border="none"
                    padding="10px 20px"
                    fontWeight="500"
                    width="100%"
                    fontSize="14px"
                    height="48px"
                    background="#1D78EC"
                    borderRadius="8px"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
=======
        <div>
          <video src={success} autoPlay/>
           </div> 
        ) : (
        <div>
        <div className="background-images">
          <img src={cloud} className="png cloud" />
          <img src={trees} className="png trees" />
        </div>
        <div className="text-content">
          Great job! You're making a positive
          <br />
          contribution to preserving our
          <br />
          green environment.
        </div>
        <div className="plantation-form">
          <div className="head">
            <h5>Fill out this form</h5>
            <p>
              Our team will reach out to you to help with your tree plantation
            </p>
          </div>
          <div className="form">
            <Inputs placeholder="Your Name" label="Your Name" />
            <Inputs placeholder="Phone number" label="Phone number" />
            <Inputs placeholder="Email" label="Email" />
            <Inputs placeholder="Location" label="Location" />
            <Inputs
              placeholder="How many trees you want to plant?"
              label="How many trees you want to plant?"
            />
            <Inputs
              placeholder="Name to be planted on behalf on?"
              label="Name to be planted on behalf on?"
            />
            <div className="submit-btn">
              <Buttons
                text="Submit"
                color="#fff"
                border="none"
                padding="10px 20px"
                fontWeight="500"
                width="100%"
                fontSize="14px"
                height="48px"
                background="#1D78EC"
                borderRadius="8px"
                onClick={handleSubmit}
                style={{}}
              />
>>>>>>> 4be9da9f447bde63d633975cd72c0c52e0b8a835
            </div>
          </div>
        )}
      </div>
  )}
      </div>
    </>
  );
};

export default FormPage;
