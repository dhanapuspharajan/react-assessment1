import React from 'react';
import './App.css'

export function FunCard(props){
    
    let {head,text2,text3 ,visibility} =props;
    return(
        <div className='funcard' style={{visibility:visibility}}>
          <h1>{head}</h1>
          <h4>{text2}</h4>
          <h4 style={{color:"blue"}}>{text3}</h4>
        </div>
    )
}

export class ClassCard extends React.Component{
    
    render(){
       let { visibility,head,text2,text3 } = this.props;
      return(
        <div className='classcard' style={{backgroundColor:"Pink",visibility:visibility}}>
          <h1>{head}</h1>
          <h4>{text2}</h4>
          <h4 style={{color:"blue"}}>{text3}</h4>
        </div>
         )}
}