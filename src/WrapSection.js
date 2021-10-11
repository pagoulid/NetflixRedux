import './WrapSection.css'
import React from 'react';
import Section from './Section.js';
import tv1 from'./Section1/Section1-tv.png';
import video1 from './Section1/Section1-video-tv.mp4';
import Img2 from'./Section2/Section2-img.jpg';
import sub2 from'./Section2/Section2-sub.png';
import tv3 from'./Section3/Section3-tv.png';
import video3 from './Section3/Section3-video-tv.webm';

const str1 = "Enjoy on your TV";
const par1_1 = "Watch on Smart TV's,Playstation,Xbox";
const par1_2 = ",Chromechast,AppleTV,Blueray and more";
const parclass1 = "panel1";

 
const str2 = 'Download your Shows';
const par2_1 = 'Save your favorites easily';
const par2_2 = 'and always have something to watch';
const parclass2 = "panel2";

const str3 = 'Watch Everywhere';
const par3_1 = 'Stream unlimited movies and TV shows on your phone,';
const par3_2 = 'tablet,laptop and TV without paying more';
/* top:'30em'*/ 
const Style1 ={
    display:'inline-block',
    position:'absolute',
    
    
      
};

const parStyle1={
    position:'absolute',
    right: '50em',
    

}

const Videostyle1={
    display:'block',
    width: '465px',
    height: '250px',
    position:'absolute',
    left:'45.5em',
    top:'57em',
    
    
    
}

const Style3 ={
    display:'inline-block',
    position:'absolute',
    top: '113em'
    
    
      
};

const Videostyle3={

    width: '465px',
    height: '220px',
    position:'absolute',
    left: '45em',
    top:'116em'
    
       
}


const Style2 ={
    position:'absolute',
    height:'60%',
    right:'50em'
};

export default class WrapSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header : ""
        }
       
    }
     // await coding for sub image in section 2
     // loading bar with material-ui see bookmarks
    // define section with ID prop
    // Section properties style,header,par,textclass/parclass(for paragraph styling),video,img 
    render(){
        
        
        return(
            <div>
                
                 <Section ID ={1} style ={Style1} header={str1} textclass = {parclass1} par = {[par1_1,par1_2]} parstyle = {parStyle1} image ={tv1} isVideo = {true} video ={{content:video1,style:Videostyle1}}></Section> 
                <Section ID = {2} style ={Style2}  header={str2} textclass = {parclass2} par = {[par2_1,par2_2]} image = {Img2} subimg = {sub2} isVideo ={false} ></Section> 
                <Section ID = {3} style ={Style3} header={str3} textclass = {parclass1} par = {[par3_1,par3_2]} parstyle = {parStyle1} image ={tv3} isVideo = {true} video ={{content:video3,style:Videostyle3}}></Section>
            </div>
            
        );


    }
    
}