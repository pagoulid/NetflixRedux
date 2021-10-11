import React,{useState} from 'react';
import {motion} from 'framer-motion';

const Nav=() =>{


      const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
      
     
      
      const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
      
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
      
      const [isOpen, setIsOpen] = useState(false);

      return (
        <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.li variants={item} />
          <motion.li variants={item} />
          <motion.li variants={item} />
        </motion.ul>

    </motion.nav>
        
      )
}

export default Nav;