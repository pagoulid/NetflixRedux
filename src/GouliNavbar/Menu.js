import * as React from "react";
import { useEffect,useRef } from "react";
import { motion, useCycle } from "framer-motion";

import { MenuToggle } from "./Navbutton";
import { Navigation } from "./Navigation";




const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });
    const Reference = ref;
    
    useEffect(() => {
        
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;

}


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    
      
        
      

    return (
        <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
    };

export default Menu;