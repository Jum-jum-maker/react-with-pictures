import React, { Component } from "react";
import Image from "./pictures";
import './pictures.css'


function Boxwrapper(){
    return(
    <>
    <h3 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>NEWLY ADDED MOVIES</h3>
    <div className="container">
    <div className = "img" style={{backgroundImage: `url(${picture})`}}>
        <h4 className='color'>WE HAVE ALWAYS LIVED IN THE CASTLE</h4>
        <p className='drama'>Drama, Thriller • Movie (2024)</p>
    </div>
    </div>
    </>
    )
}



export default Boxwrapper