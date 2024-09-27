import "./FormPage.css";
import cloud from "../../assets/clouds.svg";
import trees from "../../assets/Trees.svg";
import Inputs from "../../components/input";
import Buttons from "../../components/button";

const FormPage = () => {
  return (
    <>
      <div className="form-main">
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
                onClick=""
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
