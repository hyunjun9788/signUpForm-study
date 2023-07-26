import React from 'react';
import styled from "styled-components";

const Input = styled.input`
  width:200px;
  height:30px;
  padding-left: 20px;
`

const Star = styled.span`
  position: absolute;
  font-size:5px;
  height:35px;
  margin-top:-1px;
  margin-left: 5px;
  color:red;
`
const InputBox = styled.div`
  margin-top: 20px;
`
const InputContainer = ({labelName, isRequired, inputType,placeholder, onChange, text}) => {
    return (
        <InputBox className='input-container'>
            <div>
                <label>{labelName}</label>
                {isRequired && <Star className='star'>필수<span>*</span></Star>}
            </div>
            <Input onChange={onChange} type={inputType} placeholder={placeholder} required={isRequired} value={text}/>
        </InputBox>

    );
};

export default InputContainer;