import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import React, {useState} from "react";
import Button from "./components/Button";

function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')


    const emailInputHandler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordInputHandler=(e)=>{
        setPassword(e.target.value)
    }
    const rePasswordInputHandler=(e)=>{
        setRePassword(e.target.value)
    }
    const nameInputHandler=(e)=>{
        setName(e.target.value)
    }
    const ageInputHandler=(e)=>{
        setAge(e.target.value)
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault()

        const fields = [
            {value:email, message:"'@'를 포함하여 이메일을 작성해주세요."},
            {value:password, message:'비밀번호를 입력해주세요.'},
            { value: rePassword, message: '비밀번호 재확인을 입력해주세요.' },
            { value: name, message: '이름을 입력해주세요.' },
            { value: age, message: '나이를 입력해주세요.' },
        ]

        for(const field of fields){
        if(field.value.trim() === ''){
            alert(field.message);
            return
        }}
        alert('가입이 완료되었습니다.')
    }
    return (
        <div className='container'>
            <form className='signup-form'>
                <h1>회원가입</h1>

                <label>이메일<span className='required'>필수<span className='star'>＊</span></span></label>
                <Input type='text' id='email' value={email} onChange={emailInputHandler} placeholder='이메일을 입력하세요' required/>

                <label>비밀번호<span className='required'>필수<span className='star'>＊</span></span></label>
                <Input type='password' id='password' value={password} onChange={passwordInputHandler} placeholder='비밀번호를 입력하세요' required/>

                <label>비밀번호 재확인<span className='required'>필수<span className='star'>＊</span></span></label>
                <Input type='password' id='repassword' value={rePassword} onChange={rePasswordInputHandler} placeholder='비밀번호를 입력하세요' required/>

                <label>이름</label>
                <Input type='text' id='name' value={name} onChange={nameInputHandler}  placeholder='이름을 입력하세요' />

                <label>나이</label>
                <Input type='number' id='age' value={age} onChange={ageInputHandler} placeholder='나이를 입력하세요'/>

                <Button type='submit' onClick={formSubmitHandler} className='signup-bt'>가입하기</Button>
            </form>
        </div>
    );
}

export default App;
