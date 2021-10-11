import React from 'react';
import {useState,useRef} from 'react';
import {motion,useCycle} from 'framer-motion'; 
import {ItemComps} from "./GouliItems"
import { MenuToggle } from "./Navbutton";
/**Menu open/close */

const sidebar = {
    open: (height = 1000) => ({
     clipPath: `circle(${height * 2 + 400}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.01,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const Goulimenu=()=>{
    

    const [animation,Togglecycle]=useCycle(false,true);
    const Navref = useRef({width:150,height:150});
    
/*Attempt change motion.nav motion.div*/
/*when Menu toggled change cycle phase(open/close), if open show List of Items*/ 
    return(


     
        <motion.nav 
        initial={false}
        animate={animation ? "open" : "closed"}
        custom = {()=>{return Navref.current}}
        >
          
            <MenuToggle toggle={() => Togglecycle()} />
            <motion.div className="background" variants={sidebar} >

                <ItemComps />
            </motion.div>
            
            
            
            
        </motion.nav>

    );

}

export default Goulimenu;