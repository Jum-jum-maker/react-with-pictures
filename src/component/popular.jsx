
import photo from "../assets/dune.jpg"

function Popular(props){
    return(
        <>
            <div className="imgs" style={{backgroundImage:`url(${props.image})`}}></div>
            console.log(props.image)
            <h4 className='color'>{props.texts}</h4>
            <h4 className='color'>{props.texts2}</h4>
        </>
    )
}

export default Popular