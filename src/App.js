
import './App.css';
import Input from "./components/Input";
import React, {useState} from "react";
import Button from "./components/Button";

function App() {

    const [input, setInput] = useState({
        email:'',
        password:'',
        rePassword:'',
        name:'',
        age:''
    })
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [rePassword, setRePassword] = useState('')
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')


    const emailInputHandler=(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                email:e.target.value
            }
        })
        // setEmail(e.target.value)
    }
    const passwordInputHandler=(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                password:e.target.value
            }
        })
        // setPassword(e.target.value)
    }
    const rePasswordInputHandler=(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                rePassword:e.target.value
            }
        })
        // setRePassword(e.target.value)
    }
    const nameInputHandler=(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                name:e.target.value
            }
        })
        // setName(e.target.value)
    }
    const ageInputHandler=(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                age:e.target.value
            }
        })
        // setAge(e.target.value)
    }

    const formSubmitHandler = (e)=> {
        e.preventDefault()
        console.log(input)

        const fields = [
            {value: input.email, message: "'@'를 포함하여 이메일을 작성해주세요."},
            {value: input.password, message: '비밀번호를 입력해주세요.'},
            {value: input.rePassword, message: '비밀번호 재확인을 입력해주세요.'},
            {value: input.name, message: '이름을 입력해주세요.'},
            {value: input.age, message: '나이를 입력해주세요.'},
        ]

        for (const field of fields) {
            if (field.value.trim() === '') {
                alert(field.message);
                return
            }

        }
        alert(`${input.name}님 환영합니다!`)


        setInput({
            email: '',
            password: '',
            rePassword: '',
            name: '',
            age: '',
        });

    }
    return (
        <div className='container'>
            <form className='signup-form' onSubmit={formSubmitHandler}>
                <h1>회원가입</h1>

                <label>이메일<span className='required'>필수<span className='star'>＊</span></span></label>
                <Input type='text' id='email' value={input.email} onChange={emailInputHandler} placeholder='이메일을 입력하세요' required/>

                <label>비밀번호<span className='required'>필수<span className='star'>＊</span></span></label>
                <Input type='password' id='password' value={input.password} onChange={passwordInputHandler} placeholder='비밀번호를 입력하세요' required/>

                <label>비밀번호 재확인<span className='required'>필수<span className='star'>＊</span></span></label>
                <Input type='password' id='repassword' value={input.rePassword} onChange={rePasswordInputHandler} placeholder='비밀번호를 입력하세요' required/>

                <label>이름</label>
                <Input type='text' id='name' value={input.name} onChange={nameInputHandler}  placeholder='이름을 입력하세요' />

                <label>나이</label>
                <Input type='number' id='age' value={input.age} onChange={ageInputHandler} placeholder='나이를 입력하세요'/>

                <Button type='submit' className='signup-bt'>가입하기</Button>
            </form>
        </div>
    );
}

export default App;
