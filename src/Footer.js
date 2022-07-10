import React from 'react'
// import Dropdown from './Components/dropdown';
import LanguageIcon from '@mui/icons-material/Language';
import './Footer.css';

function Footer() {
  return (
    <div className='footer_bg'>
      <div className="_container">
        <h5 className='question_call'>Question? Call XXX-XXX-XXX-XX43</h5>
        <div className="_container2">
            <div className="sub_container1">
                <li>FAQ</li>
                <li>Investor Relation</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </div>
            <div className="sub_container2">
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </div>
            <div className="sub_container3">
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </div>
            <div className="sub_container4">
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
            </div>
        </div>
        
        <div className="lang_footer">
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <LanguageIcon className='footer_globe'/>English
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#">हिन्दी</a></li>
                </ul>
            </div>
        </div>
        <h3 className='nfl_ind'>Netflix India</h3>
      </div>
    </div>
  )
}

export default Footer
