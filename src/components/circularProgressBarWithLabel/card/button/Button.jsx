import './Button.css';

const Button = (props)=>{
    return(
        <div className='buttonContainer' onClick={props.onClick}>
            {props.content}
        </div>
    )
}


export default Button;