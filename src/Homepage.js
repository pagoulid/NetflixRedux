import logo from "./logo.svg";
import MainSection from './MainSection';
import WrapSection from './WrapSection';
import Footer from './Footer/Footer';



import {motion} from 'framer-motion';
import './Homepage.css'
/**Menu needs fixing */
/** <MenuToggle className="Nav" />*/


 const Homepage =()=>{
     return(
        <motion.div className = "Homepage">
            
            <MainSection className ="Main">
                    
                    <img src={logo} className="App-logo" alt="logo" />
            </MainSection>
            <WrapSection  />
            <Footer />
        </motion.div>
            ); }


export default Homepage;
    
    
/** */