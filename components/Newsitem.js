import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from './loading.gif'

const Newsite =(props)=> {
  
    let {title,description,url,newsurl,author,date,source} = props;
    return (
       
      <div>
        <div className="card" style={{width:"18rem"}}>
        <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'>{source}</span>
  <img src={url?url:loading} className="card-img-top"  alt="..." /> 
  <div className="card-body">
  
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <br/>
   

    <p className='card-text'><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
   
    <a href={newsurl} target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }


export default Newsite