import React from 'react'
import './Login.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {auth} from "./firebase";
import { useState} from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login  = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
      .then((auth)=>{
        navigate('/Movies');
      })
      .catch((e)=>alert(e.message));
  }
  const register = (event) =>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
      .then((auth) => {
        navigate('/Movies');
    })
    .catch((e) => alert(e.message));
  }


  return (
    <>
    <div className='login_page'>
      <img src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="" className='netflix_title' />
      <div className="sign_in_container">
        <h2 className='log_cont_ttl'>Sign In</h2>
        <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder='Email ID' className='login_email_page'/>
        <input value={password} onChange={event => setPassword(event.target.value)} type="password" name="" id="" placeholder='Password' className='login_pwd_page' />
        <button type='submit' onClick={register} className='sign_btn_login'>Sign In</button>
        <div className="remember_need_help">
            <span className='ttl1_spn'>
                <input type="checkbox" name="" id="" className='check_box' /><span className='rem_line_hed'>Remember Me</span>
            </span>
            <a href="https://www.netflix.com/in/LoginHelp" className='help_need'>Need Help?</a>
        </div>

        <div className="sign_up_det">
            <p className="create_link"><span className="line1">New to Netflix?</span><Link to='/' className='create_link'>Sign up now</Link></p>
            <p className="det_para">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </div>
      </div>
    </div>

    <div className="black_log_bg_page">
        <Footer/>
    </div>
    </>
  )
}

export default Login
