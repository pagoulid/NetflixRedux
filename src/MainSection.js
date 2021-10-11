import './Main-Section.css'
import {MenuToggle}from './GouliNavbar/Navbutton';
import GouliMenu from './GouliNavbar/GouliMenu';
import Sign from "./Sign";
import { motion } from 'framer-motion';
export default function MainSection(){

/** <Lsel Lang1 = "Greek" Lang2 = "English" Count = "2" />*/
/**Navbutton-> wrap button inside div to position it */
/**toLink props arg for redirection */
/**style for each btn positioning */
    const Logstyle ={
        position:'absolute',
        top:'1em',
        left:'90em',

    }
    const Signstyle  ={
        position:'absolute',
        top:'5em',
        left:'90em'

    }
    return(
        <div className="Main">
            <motion.div className="Navbutton">
                <GouliMenu />
            </motion.div>
            <Sign className = 'Sign' title="Login" toLink = '/Log' BtnStyle={Logstyle}/>
            <Sign className = 'Signup' title="Signup" toLink = '/Register' BtnStyle={Signstyle}/>
            <div className = 'Maintext'>
                <h1>Unlimited Movies,TV</h1>
                <h1>,shows and more</h1>
                <p className ='par1'>Watch anywhere,cancel anytime</p>

                <div className = 'subMaintext'>
                    <p className ='par2'>Ready to watch?Enter your E-mail to create or restart your membership</p>

                    <form>

                        <input className="input1" type="text" id="Email-Address" name="Email Address" placeholder="Email Address" />
                        <input  className="input2" type="submit" id="button" value="Get Started >" />
                    </form>

                </div>

            </div>

            
          
            
            
        </div>
    )
}