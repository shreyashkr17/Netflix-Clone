import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import './dropdown.css'

function dropdown() {
  return (
    <div>
      <div class="dropdown">
        <button class="btn btn-danger position-lang dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <LanguageIcon className="globe_logo"/>English
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">हिन्दी</a></li>
        </ul>
    </div>
    </div>
  )
}

export default dropdown
