import './InstructionsPage.css'
import logo from '../../assets/Insrtruction Image/BG1.svg'
import brain from '../../assets/Insrtruction Image/7718867 copy.svg'
import co2 from '../../assets/Insrtruction Image/NTU4MzQ0NDIz [Converted] copy.svg'
import earth from '../../assets/Insrtruction Image/Group 121090.svg'
import { useNavigate } from 'react-router-dom'

const InstructionsPage = () => {
  const navigate = useNavigate();

  function handleButtonClick (){
    navigate('/survey')
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f4fa',
       
      }}
    >
      <div
        style={{
         width:'100%',
          height: '258px',
          position: 'relative',
          backgroundImage: `url(${logo})`,
          opacity:'1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
     
        }}
      >
        <div
          style={{
            width: '282px',
            height: '54px',
            color: '#0E70EB',
            fontFamily: 'Excon, sans-serif', 
            fontWeight: 'bolder',
            fontSize: '20px',
           opacity:'1px',
            textAlign: 'center', 
            letterSpacing: '-0.1px',
            position: 'absolute',
            marginTop: '150px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px',
            
          }}
        >
          Know & offset your carbon footprints!
        </div>
      </div>
      <div
        style={{
          width: '305px',
          marginLeft:'20px',
          marginRight:'20px',
          height: '369px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '303px',
            height: '16px',
            marginBottom: '70px'
          }}
        >
          <div
  style={{
    marginLeft: '12px',
    marginTop: '24px',
    height: '61px',
    width: '61px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#E2F1E6', 
    borderRadius: '8px'
  }}
>
  <img
    src={brain}
    alt=''
    style={{
      height: '59.59px',
      width: '59.43px',
      borderRadius: '8px',
      backgroundColor:'#FFF5F3'
    }}
  />
</div>
          <div style={{ width: '230px', marginLeft: '12px' }}>
            <p
              style={{
                fontSize: '13px',
                color: '#030911',
                fontWeight: '600',
                
                fontFamily: 'Sarabun, sans-serif',
                letterSpacing: '0px',
                opacity: 1,
                textAlign: 'left',
                //   marginLeft:'12px',
                marginBottom: '6px',
                marginTop: '24px'
              }}
            >
              Answer Our Question
            </p>
            <span
              style={{
                color: '#60666F',
                fontSize: '10.8px',
                fontFamily: 'Sarabun, sans-serif',
                lineHeight:'17px',
                width: '220px',
                height: '37px',
                textAlign: 'left',
                marginTop: '0px'
              }}
            >
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: '303px',
            height: '16px',
            marginBottom: '70px'
          }}
        >
          <div
  style={{
    marginLeft: '12px',
    marginTop: '24px',
    height: '61px',
    width: '61px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#FFF7E8', 
    borderRadius: '8px'
  }}
>
  <img
    src={co2}
    alt=''
    style={{
      height: '59.59px',
      width: '59.43px',
      borderRadius: '8px',
      backgroundColor:'#FFF7E8'
    }}
  />
</div>
          <div style={{ width: '230px', marginLeft: '12px' }}>
            <p
              style={{
                fontSize: '13px',
                color: '#030911',
                width: '210px', 
                fontFamily: 'Sarabun, sans-serif',
                lineHeight: '18px',
               
               fontWeight:'600',
               
                textAlign: 'left',
                marginBottom: '6px',
                marginTop: '24px'
              }}
            >
              Know your Carbonfootprint
            </p>
            <span
              style={{
                color: '#60666F',
                fontSize: '10.8px',
                lineHeight:'17px',
                fontFamily: 'Sarabun, sans-serif',
                width: '220px',
                height: '39px',
                textAlign: 'left',
                marginTop: '0px'
              }}
            >
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '303px',
            height: '16px',
            marginBottom: '70px'
          }}
        >
          <div
  style={{
    marginLeft: '12px',
    marginTop: '24px',
    height: '61px',
    width: '61px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#E2F1E6', 
    borderRadius: '8px'
  }}
>
  <img
    src={earth}
    alt=''
    style={{
      height: '59.59px',
      width: '59.43px',
      borderRadius: '8px',
      backgroundColor:'#E2F1E6'
    }}
  />
</div>

          <div style={{ width: '230px',marginLeft:'12px'}}>
            <p
              style={{
                fontSize: '12px',
                color: '#030911',
                fontWeight: 600,
               width:'220px',
                fontFamily: 'Sarabun, sans-serif',
                letterSpacing: '0px',
                opacity: 1,
                textAlign: 'left',
                fontStyle:'600',
                //   marginLeft:'12px',
                marginBottom: '6px',
                marginTop: '24px'
              }}
            >
              Offset it by following the instructions
            </p>
            <span
              style={{
                color: '#60666F',
                fontSize: '10.8px',
                width: '220px',
                fontFamily: 'Sarabun, sans-serif',
                lineHeight:'17px',
                height: '37px',
                textAlign: 'left',
                marginTop: '0px',
                marginBottom:'50px'
              }}
            >
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>
        <div style={{ display:'flex',marginLeft:'16px' }}>
          <div style={{marginTop:'50px'}}>
            <button
              style={{
                width: '133px',
                height: '48px',
                backgroundColor: '#E6EEFA',
                color: '#0E70EB',
                borderRadius:'10px',

                 border:'none',
                outline:'none'
              }}
            >
              <span style={{ fontSize: '14px', letterSpacing: '-0.07px',fontWeight:'600' }}>
                
                Later
              </span>
            </button>
          </div>
          <div style={{marginLeft:'12px',marginTop:'50px'}}>
            <button
              style={{
                width: '133px',
                height: '48px',
                backgroundColor: '#0E70EB',
                fontFamily: 'Sarabun, sans-serif',
                color: '#FFFFFF',
                fontWeight:'semiBold',
                borderRadius:'8px',
                border:'none',
                outline:'none'
              }} onClick={handleButtonClick}
            >
              <span style={{ fontSize: '14px', letterSpacing: '-0.07px', }}>
                
                Calculate & offset
              </span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default InstructionsPage
