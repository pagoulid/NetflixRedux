import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import './Form.css';
import logo from './../logo.svg';
//import {store} from './../app/store';
import {clicked} from './../app/store';
//import {SaveSlice}from '../features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';



 //const {clicked} = SaveSlice.actions;

/**y = 200 */
/**delay transition prop is to delay the start of the transition */
/**stiffness set to high value to make the form more bouncy */


const Form =()=>{
    
    const [currName,SetcurrName] = useState('');
    const [currPswd,SetcurrPswd] = useState('');
    //const selectName = state => state.save[state.save.currindex].name+"";
    //const selectPswd = state => state.save[state.save.currindex].pswd+"";
    const Formdispatch = useDispatch();

    
    /**Little bug await at inspect el in input */
   /* async function getElementName(){
            let val = await document.getElementById("Name").value;
            SetcurrName(val);
            console.log("Given name",currName);


    }

    async function getElementPswd(){
        let val = await document.getElementById("Pswd").value;
        SetcurrPswd(val);
        console.log("Given pswd",currPswd);


}*/


    const Submission=(e)=>{
         e.preventDefault();
         Formdispatch(clicked({name:currName,pswd:currPswd}));
         

    }
    return(
        <section>
            
        
        <motion.div className="Formblock" initial={{y:-120}} animate={{ y: 200 }} transition={{delay:0.5 ,type:'spring',stiffness:300}}>
            

            <motion.form  className ="Form"   onSubmit={Submission}>
                
                    <motion.label className="Namelabel">
                        <p>Name:</p>
                        <input className="Namefield" id="Name" type="text" value={currName} name="name" onChange={(e)=>SetcurrName(e.target.value)} />
                    </motion.label>
                    
                    <motion.label className="Pswdlabel">
                        <p>Password:</p>
                        <input className="Pswdfield"  id="Pswd"type="text" value={currPswd} name="password" onChange={(e)=>SetcurrPswd(e.target.value)}  />
                    </motion.label>
                    
                    
                    <input className="Btn" type = "submit" value="submit"  />
            </motion.form>
            
        </motion.div>
        <img className="Formlogo" src={logo} alt="Form Logo" />  
            
            </section>
      
    )
}

export default Form;
/**<ul>
                <li color='green'>{useSelector(selectName)}</li>
                <li color='red'>{useSelector(selectPswd)}</li>

            </ul> */