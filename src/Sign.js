import "./Sign.css";
import React from "react";
import { Link,Redirect} from "react-router-dom";


const Sign =(props)=> {
  
 
  
    const T = props.title;
    
    return (
      
      <div>
       
       <Link to={props.toLink} >
        <button className="SignButton" type='button' style={props.BtnStyle} >
            <h3 className="SignText">{T}</h3>
          </button>
       </Link>
        
      
  </div>
    );
  }


/*
function Sign(props){
    return(
        <div className="Sign">
            <button className= "SignButton" type="button"><h3 className="SignText">{props.text}</h3></button>
        </div>
       
    );
}*/

export default Sign;
