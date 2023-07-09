function Input({type,id,placeholder,required,onChange,value}){
    const InputChangeHandler = (e) => {
        if (type === 'email') {
            const value = e.target.value;
            const isValid = value.includes('@');
            e.target.setCustomValidity(isValid ? '' : '이메일을 유효하게 입력하세요.');
        }
        onChange(e);
    };
    return (
        <input type={type} id={id} placeholder={placeholder} required={required} value={value} onChange={InputChangeHandler}/>
    )
}

export default Input