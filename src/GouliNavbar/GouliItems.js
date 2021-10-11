import React from 'react';
import {motion} from 'framer-motion';
import {Item} from './Goulist';
import './GouliItems.css';


const array =['1','2','3','4']; /*test for goullist*/ 

const stylez = { border: `2px solid #9C1AFF` };
const variants = {
    open: {
      transition: { staggerChildren: 0.02, delayChildren: 0 }
    },
    closed: {
      transition: { staggerChildren: 0.2 ,staggerDirection:-1}
    }
  };



  const Listvariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 80,
      opacity: 0,
      transition: {
        y: { stiffness: 1000  ,delay:0}
      }
    }
  };
export const ItemComps = ()=>{


    return(
        
            <motion.ul className="NavList" variants={variants}>
              {array.map((item)=>{return(<Item style ={stylez} variants={Listvariants} 
                value={item}/>);})}
                
            </motion.ul>
        
    );
}

/*

<motion.li
                style = {stylez}
                variants ={Listvariants}
               >Yeeeeeeeeee</motion.li>
                <motion.li
                style = {stylez}
                variants ={Listvariants}
                >Bruh!!!!</motion.li>
*/ 