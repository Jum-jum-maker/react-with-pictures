import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './component/pictures'
import picture from "./assets/image1.jpg"
import picture2 from "./assets/image2.jpg"
import picture3 from "./assets/image3.jpg"
import picture4 from "./assets/image4.jpg"
import Popular from './component/popular'
import  photo from './assets/dune.jpg'


// import Boxwrapper from './component/wrapper'
function App() {
  const title1 = "WE HAVE ALWAYS LIVED IN THE CASTLE"
  const title2 = "Drama, Thriller • Movie (2024)"
  const title3 = "NORTH HOLLYWOOD"
  const title4 = "Drama, Thriller • Movie (2024)"
const title5= "ABDUCTED BY MY TEACHER"
const title6 =" TV 14 Drama,  • Movie (2023)"
const title7 = "THE MARSH KINGS DAUGHTER"
const title8 ="R- Thriller, • Movie (2023) "

const dune = "Dune"
const dune2 = "PG-13 • Adventure, Science Fiction • Movie (2021)"

 
  return (
    <>
        <h3 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>NEWLY ADDED MOVIES</h3>
        <div className="container">
    <Image imageUrl={picture} text ={title1} text2={title2}/>
    <Image imageUrl={picture2} text= {title3} text2={title4}/>
    <Image imageUrl={picture3} text={title5} text2={title6} />
    <Image imageUrl={picture4} text ={title7} text2={title8}/> 
    </div>

    <h3 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>POPULAR</h3>
    <Popular image={photo} texts= {dune} texts2={dune2} />

    </>
  )
}

export default App
