import './App.css';
import InputContainer from "./components/InputContainer";
import React, {useState} from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import styled from "styled-components";
import Modal from "./components/Modal";


const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Form = styled.form`
  width: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [showModal, setShowModal] = useState(false)


    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const changeRePasswordHandler = (e) => {
        setRePassword(e.target.value)
    }
    const changeNameHandler = (e) => {
        setName(e.target.value)
    }
    const changeAgeHandler = (e) => {
        setAge(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== rePassword) {
            setShowModal(true)
            return
        }
        if (age < 0) {
            setShowModal(true)
            return
        }
        if (password === rePassword && age >= 0) {
            setShowModal(true)
            return
        }


        setEmail('')
        setPassword('')
        setRePassword('')
        setName('')
        setAge('')

    }

    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <Box>
            <Header/>
            <Form onSubmit={submitHandler}>
                <InputContainer labelName='이메일' onChange={changeEmailHandler} isRequired={true} inputType='email'
                                placeholder={'이메일을 입력해주세요'} text={email}/>
                <InputContainer labelName='비밀번호' onChange={changePasswordHandler} isRequired={true} inputType='password'
                                placeholder={'비밀번호를 입력해주세요'} text={password}/>
                <InputContainer labelName='비밀번호 재확인' onChange={changeRePasswordHandler} isRequired={true}
                                inputType='password' placeholder={'비밀번호를 다시 입력해주세요'} text={rePassword}/>
                <InputContainer labelName='이름' onChange={changeNameHandler} inputType='text' placeholder={'이름을 입력해주세요'}
                                text={name}/>
                <InputContainer labelName='나이' onChange={changeAgeHandler} inputType='number' placeholder={'나이를 입력해주세요'}
                                text={age}/>
                <Button type='submit'/>
            </Form>
            {showModal && (
                <Modal message={password !== rePassword ?
                    "비밀번호를 다시 확인해주세요."
                    : age <= 0 ? "나이는 0보다 큰 숫자를 입력해야 합니다."
                        : `${name}님 환영합니다!`}
                       onClose={closeModal}
                />
            )}
        </Box>
    );
}

export default App;
