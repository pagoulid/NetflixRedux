import './Section.css';
import React from 'react';


export default class Section extends React.Component{
    

   /**
               

 */
    render(){
        return(
            <div className = 'Section' >
                {this.props.isVideo && <video id="video" style ={ this.props.video.style} loop autoPlay  ><source src={this.props.video.content} /></video>}
                <img src={this.props.image}  style = {this.props.style} alt ='img' />
                {this.props.ID == 2 && <div className = 'Subsec2' ><div>Stranger Things</div></div>}
                
                <h1>{this.props.header} </h1>
                {this.props.par.length>0 && <div class = {'panel '+ this.props.textclass} style = {this.props.parstyle}><p class = 'panel-body'>{this.props.par[0]}</p><br /><p>{this.props.par[1]}</p> </div> }
                
               
                
                
                
                
            </div>
        );
    }
  
    
}