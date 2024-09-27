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