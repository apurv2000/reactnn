import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom';
//function based component
const Navbar=(props)=>{
    return (
      <div><nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{position:'sticky'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/N">RealNews</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/N">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            
          </ul>
          <div class={`form-check form-switch `} style={{textColor:`${props.mode=='light'?"dark":'light'}`}}>
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
            <label class="form-check-label" htmlfor="flexSwitchCheckChecked">{props.mode=='dark'?'dark':"light"}</label>
         </div>
          
          
        </div>
      </div>
    </nav></div>
    )
  
}

export default Navbar
