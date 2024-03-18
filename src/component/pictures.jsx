import { useState } from 'react'
import './pictures.css'
import picture from "../assets/image1.jpg"
import picture2 from "../assets/image2.jpg"
import picture3 from "../assets/image3.jpg"
import picture4 from "../assets/image4.jpg"





function Image(props){
    return(
    <>
    <div className="container">
    <div className = "img" style={{backgroundImage: `url(${props.imageUrl})`}}>
    <h4 className='color'>{props.text}{props.text2}</h4>

        </div>
    </div>
    {/* <img src= {picture2}alt ="picture" className="img"/>
    <img src= {picture3}alt ="picture" className="img"/>
    <img src ={picture4}alt ="picture" className ="img"/>

    <div style={{ backgroundImage: `url(${background})` }}> */}





    
    </>
    )
}

export default Image