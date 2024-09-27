import './InstructionsPage.css'
import logo from '../../assets/Insrtruction Image/BG1.svg'
import brain from '../../assets/Insrtruction Image/7718867 copy.svg'
import co2 from '../../assets/Insrtruction Image/NTU4MzQ0NDIz [Converted] copy@2x.jpg'
import earth from '../../assets/Insrtruction Image/Group 121090@2x.jpg'
const InstructionsPage = () => {
  return (
    <div
      style={{
        width: '375px',
        height: '812px',
        backgroundColor: '#f0f4fa'
      }}
    >
      <div
        style={{
          width: '375px',
          height: '288px',
          position: 'relative',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          style={{
            width: '262px',
            height: '54px',
            color: '#0E70EB',
            fontFamily: 'Excon, sans-serif', 
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            textAlign: 'center', 
            letterSpacing: '-0.1px',
            position: 'absolute',
            top: '190px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px',
            borderRadius: '5px'
          }}
        >
          Know & offset your carbon footprints!
        </div>
      </div>
      <div
        style={{
          width: '335px',
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
          <div style={{ marginLeft: '16px', marginTop: '24px',height:'61px'}}>
            {' '}
            <img
              src={brain}
              alt=''
              style={{
                height: '47.3px',
                width: '47.19px',
                backgroundColor: '#FFF5F3',
                borderRadius: '8px 8px 8px 8px'
              }}
            />
          </div>
          <div style={{ width: '230px', marginLeft: '12px' }}>
            <p
              style={{
                fontSize: '14px',
                color: '#030911',
                fontWeight: 'bold',
                lineHeight: '18px',
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
            <p
              style={{
                color: '#60666F',
                fontSize: '11px',
                width: '230px',
                height: '37px',
                textAlign: 'left',
                marginTop: '0px'
              }}
            >
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </p>
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
          <div style={{ marginLeft: '16px', marginTop: '24px',height: '61px', backgroundColor: '#FFF7E8',
                width: '61px', }}>
            {' '}
            <img
              src={co2}
              alt=''
              style={{
                height: '47.31px',
                width: '53.19px',
               
                borderRadius: '8px 8px 8px 8px'
              }}
            />
          </div>
          <div style={{ width: '230px', marginLeft: '12px' }}>
            <p
              style={{
                fontSize: '14px',
                color: '#030911',
                fontWeight: 'bold',
                lineHeight: '18px',
               
                letterSpacing: '0px',
                opacity: 1,
                textAlign: 'left',
                //   marginLeft:'12px',
                marginBottom: '6px',
                marginTop: '24px'
              }}
            >
              Know your Carbonfootprint
            </p>
            <p
              style={{
                color: '#60666F',
                fontSize: '11px',
                width: '230px',
                height: '37px',
                textAlign: 'left',
                marginTop: '0px'
              }}
            >
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </p>
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
          <div style={{ marginLeft: '16px', marginTop: '24px' }}>
            {' '}
            <img
              src={earth}
              alt=''
              style={{
                height: '61px',
                width: '61px',
                backgroundColor: '#FFF5F3',
                borderRadius: '8px 8px 8px 8px'
              }}
            />
          </div>
          <div style={{ width: '230px', marginLeft: '12px' }}>
            <p
              style={{
                fontSize: '14px',
                color: '#030911',
                fontWeight: 600,
                lineHeight: '20px',
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
            <p
              style={{
                color: '#60666F',
                fontSize: '11px',
                width: '230px',
                height: '37px',
                textAlign: 'left',
                marginTop: '0px',
                marginBottom:'50px'
              }}
            >
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </p>
          </div>
        </div>
        <div style={{ display:'flex',marginLeft:'16px' }}>
          <div style={{marginTop:'50px'}}>
            <button
              style={{
                width: '143px',
                height: '48px',
                backgroundColor: '#E6EEFA',
                color: '#0E70EB',
                borderRadius:'10px'
              }}
            >
              <span style={{ fontSize: '14px', letterSpacing: '-0.07px' }}>
                
                Later
              </span>
            </button>
          </div>
          <div style={{marginLeft:'16px',marginTop:'50px'}}>
            <button
              style={{
                width: '143px',
                height: '48px',
                backgroundColor: '#0E70EB',
                color: '#FFFFFF'
              }}
            >
              <span style={{ fontSize: '12px', letterSpacing: '-0.07px', }}>
                
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
