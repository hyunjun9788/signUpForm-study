import React from "react";
import styled from 'styled-components'

const SignUpBt = styled.button`
  padding:10px 20px;
  border-radius: 30px;
  margin-top: 40px;
  border:none;
  background-color: royalblue;
  color:white;
  font-weight: bold;
  width:230px;
`
function Button({type}){
    return(

        <SignUpBt type={type} className='signup-bt'>가입하기</SignUpBt>

    )
}

export default Button