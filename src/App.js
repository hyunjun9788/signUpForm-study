import './App.css';
import InputContainer from "./components/InputContainer";
import React, {useState} from "react";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')



    const changeEmailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const changePasswordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const changeRePasswordHandler=(e)=>{
        setRePassword(e.target.value)
    }
    const changeNameHandler=(e)=>{
        setName(e.target.value)
    }
    const changeAgeHandler=(e)=>{
        setAge(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        if(password!==rePassword){
            alert('비밀번호와 비밀번호 재확인에 입력한 값이 다릅니다.')
            return
        }
        alert('남현준님 환영합니다!')


        setEmail('')
        setPassword('')
        setRePassword('')
        setName('')
        setAge('')

    }
    return (
        <div className='box'>
            <Header/>
            <form onSubmit={submitHandler}>
                <InputContainer labelName='이메일' onChangeEmail={changeEmailHandler} isRequired={true} inputType='email' placeholder={'이메일을 입력해주세요'}/>
                <InputContainer labelName='비밀번호' onChangePassword={changePasswordHandler} isRequired={true} inputType='password' placeholder={'비밀번호를 입력해주세요'}/>
                <InputContainer labelName='비밀번호 재확인' onChangePassword={changeRePasswordHandler} isRequired={true} inputType='password' placeholder={'비밀번호를 다시 입력해주세요'}/>
                <InputContainer labelName='이름' onChangeName={changeNameHandler}  inputType='text' placeholder={'이름을 입력해주세요'}/>
                <InputContainer labelName='나이' onChangeAge={changeAgeHandler}  inputType='number' placeholder={'나이를 입력해주세요'}/>


                <Button type='submit'/>
            </form>
        </div>
    );
}

export default App;
