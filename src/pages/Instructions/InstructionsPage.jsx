import './InstructionsPage.css';
import logo from '../../assets/Insrtruction Image/BG1.svg';
import brain from '../../assets/Insrtruction Image/7718867 copy.svg';
import co2 from '../../assets/Insrtruction Image/NTU4MzQ0NDIz [Converted] copy.svg';
import earth from '../../assets/Insrtruction Image/Group 121090.svg';
import { useNavigate } from 'react-router-dom';

const InstructionsPage = () => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/survey');
  }

  return (
    <div className="instruction-container">
      <div
        className="instruction-header"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="instruction-title">
          Know & offset your carbon footprints!
        </div>
      </div>
      <div className="instruction-card">
        <div className="instruction-step">
          <div className="instruction-icon-container brain">
            <img src={brain} alt="" className="instruction-icon" />
          </div>
          <div className="instruction-step-content">
            <p className="instruction-step-title">Answer Our Question</p>
            <span className="instruction-step-description">
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>

        <div className="instruction-step">
          <div className="instruction-icon-container co2">
            <img src={co2} alt="" className="instruction-icon" />
          </div>
          <div className="instruction-step-content">
            <p className="instruction-step-title">Know your Carbonfootprint</p>
            <span className="instruction-step-description">
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>

        <div className="instruction-step">
          <div className="instruction-icon-container earth">
            <img src={earth} alt="" className="instruction-icon" />
          </div>
          <div className="instruction-step-content">
            <p className="instruction-step-title">
              Offset it by following the instructions
            </p>
            <span className="instruction-step-description">
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>

        <div className="instruction-button-container">
          <button className="instruction-button instruction-button-later">
            <span className="instruction-button-text">Later</span>
          </button>
          <button
            className="instruction-button instruction-button-calculate"
            onClick={handleButtonClick}
          >
            <span className="instruction-button-text">
              Calculate & offset
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
