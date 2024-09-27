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
import './Card.css';

const Card  = ({image,title})=>{
    return(
        <div className='cardContainer'>
          <img src={image}>
          </img>
          <div>
            {title}
          </div>
        </div>
    )
}

export default Card; 