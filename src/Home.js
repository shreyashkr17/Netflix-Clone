import React from 'react'
import './Home.css';
import Product1 from './Product1';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Dropdown from './Components/dropdown';
// import { useStateValue } from './StateProvider';

function Home() {
  // const [,dispatch] = useStateValue();

  return (
    <>
    <div className='intro_banner'>
      <img src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="" className='netflix_title' />
      <button className='sign_in_button'><Link to="/login" className='sign_in_link'>Sign In</Link></button>

      <Dropdown className='lang-btn-home-banner' />

      <div className="home_title">
        <h1 className="title1">Unlimited movies, TV <span className='title1_part2'> shows and more.</span></h1>
        <h5 className='title2'>Watch anywhere. Cancel anytime.</h5>
        <p className='home_para_title'>Ready to watch? Enter your email to create or restart your membership.</p>

        <input type="email" name="email_id" id="emailid" className='email_title_home' placeholder='Email address' required/>
        <button className='email_home_btn'>Get Started {'>'}</button>
      </div>
    </div>
    <Product1/>
    </>
  )
}

export default Home
