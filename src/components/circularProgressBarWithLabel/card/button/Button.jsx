import './Button.css';

const Button = ({content,onClick,type})=>{
    return(
        <div className='buttonContainer' onClick={onClick}>
            {content}
        </div>
    )
}


export default Button;