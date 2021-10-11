import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import './Form.css';
import logo from './../logo.svg';
//import {store} from './../app/store';
import {clicked} from './../app/store';
import {SaveEntry}from '../features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
/*Styling needs fixing*/ 


 //const {clicked} = SaveSlice.actions;

/**y = 200 */
/**delay transition prop is to delay the start of the transition */
/**stiffness set to high value to make the form more bouncy */


const SignForm =()=>{
    
    const [currName,SetcurrName] = useState('');
    const [currPswd,SetcurrPswd] = useState('');
    const [currCPswd,SetcurrCPswd] = useState('');
    const [currMail,SetcurrMail] = useState('');
    const [currAddr,SetcurrAddr] = useState('');
    const [currCon,SetcurrCon] = useState('');
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
/**Pswd confirmation see confirmation label */
/**On submission if confirmation match with pswd then dispatch  */
/**validate pswd 4to15 length contains at least one numeric and special char */
    const Confirm=(currCPswd===currPswd)?'Confirmation complete':'Does not match';
    /**match validation */
    const Pswdmatch = currPswd.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$/);
    const Namematch = currName.match(/^[a-zA-Z]{4,15}$/);

    /**visualize context due to matching */
    const PValidation =Pswdmatch?'':'Must contain at least one number and symbol';
    const NValidation =Namematch?'':'Must contain at least only letters';
        
    /**if pswd,name validation and confirmation pswd */
    /*Formdispatch(clicked({name:currName,pswd:currPswd,mail:currMail,addr:currAddr
            ,contact:currCon}))
            else instead of clicked--> SaveEntry for ReduxThunk*/ 
            /**Saveentry testing thunk logic */
    const Submission=(e)=>{
         e.preventDefault();
         ((Namematch!=null) & (Pswdmatch!=null) &(currCPswd===currPswd))?Formdispatch(clicked({name:currName,pswd:currPswd,mail:currMail,addr:currAddr
            ,contact:currCon})):alert('Sign up failed');
            console.log(Namematch);
         

    }
    return(
        <section>
            
        
        <motion.div className="Formblock" initial={{y:-120}} animate={{ y: 200 }} transition={{delay:0.5 ,type:'spring',stiffness:300}}>
            

            <motion.form  className ="Form"   onSubmit={Submission}>
                
                    <motion.label className="Namelabel">
                        <p>Name:</p>
                        <input className="Namefield" id="Name" type="text" value={currName} name="name" required onChange={(e)=>SetcurrName(e.target.value)} />
                        <h6>{currName?NValidation:''}</h6>
                    </motion.label>
                    
                    <motion.label className="Pswdlabel">
                        <p>Password:</p>
                        <input className="Pswdfield"  id="Pswd"type="text" value={currPswd} name="password" required onChange={(e)=>SetcurrPswd(e.target.value)}  />
                        <h6>{currPswd?PValidation:''}</h6>
                    </motion.label>

                    <motion.label className="CPswdlabel">
                        <p>Confirm:</p>
                        <input className="CPswdfield"  id="Confirmation"type="text" value={currCPswd} name="password" required onChange={(e)=>SetcurrCPswd(e.target.value)}  />
                        <h6>{currCPswd?Confirm:''}</h6>
                    </motion.label>

                    <motion.label className="Maillabel">
                        <p>E-mail:</p>
                        <input className="Mailfield"  id="Mail"type="text" value={currMail} name="mail" required onChange={(e)=>SetcurrMail(e.target.value)}  />
                    </motion.label>

                    <motion.label className="Addrlabel">
                        <p>Address:</p>
                        <input className="Addrfield"  id="Address"type="text" value={currAddr} name="address"  required onChange={(e)=>SetcurrAddr(e.target.value)}  />
                    </motion.label>

                    <motion.label className="Conlabel">
                        <p>Contact:</p>
                        <input className="Confield"  id="Contact"type="text" value={currCon} name="contact" onChange={(e)=>SetcurrCon(e.target.value)}  />
                    </motion.label>
                    
                    
                    <input className="Btn" type = "submit" value="sign up"  />
            </motion.form>
            
        </motion.div>
        <img className="Formlogo" src={logo} alt="Form Logo" />  
            
            </section>
      
    )
}

export default SignForm;
/**<ul>
                <li color='green'>{useSelector(selectName)}</li>
                <li color='red'>{useSelector(selectPswd)}</li>

            </ul> */