import './Card.css';

const Card  = ({content,title,backgroundColor,borderColor})=>{
    return(
        <div style={{backgroundColor:backgroundColor,border:borderColor&&`solid ${borderColor}`}} className='cardContainer'>
         {content && <div className='icon'>
            {content}
          </div>}
          <div className='title'>
            {title}
          </div>
        </div>
    )
}

export default Card; 