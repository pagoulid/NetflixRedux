import React from 'react';
import {motion} from 'framer-motion';
import './Goulist.css'

export const Item = (props) =>{


    return(
        
         <motion.li className="Item"
         whileHover={{ scale: 1.1 }}
                style = {props.style}
                variants ={props.variants}
        >{props.value}</motion.li>

    );
}