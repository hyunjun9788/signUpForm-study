function Button(props){
    return(
        <button type={props.type} onClick={props.onClick} className='signup-bt'>가입하기</button>
    )
}

export default Button