import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='container'>
            <form className='signup-form'>
                <h1>회원가입</h1>

                <label>이메일<span className='required'>필수<span className='star'>＊</span></span></label>
                <input type='text' id='email' placeholder='이메일을 입력하세요' required/>

                <label>비밀번호<span className='required'>필수<span className='star'>＊</span></span></label>
                <input type='password' id='password' placeholder='비밀번호를 입력하세요' required/>

                <label>비밀번호 재확인<span className='required'>필수<span className='star'>＊</span></span></label>
                <input type='password' id='repassword' placeholder='비밀번호를 입력하세요' required/>

                <label>이름</label>
                <input type='text' id='name' placeholder='이름을 입력하세요' />

                <label>나이</label>
                <input type='text' id='age' placeholder='나이를 입력하세요'/>

                <button type='button' className='signup-bt'>가입하기</button>
            </form>
        </div>
    );
}

export default App;
