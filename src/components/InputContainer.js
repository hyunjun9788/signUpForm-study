import React from 'react';

const InputContainer = ({labelName, isRequired, inputType,placeholder, onChange}) => {
    return (
            <div className='input-container'>
                <div>
                    <label>{labelName}</label>
                    {isRequired && <span className='star'>필수<span>*</span></span>}
                </div>
                <input onChange={onChange} type={inputType} placeholder={placeholder} required={isRequired}/>
            </div>

    );
};

export default InputContainer;