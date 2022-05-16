import { useState } from 'react';
import './App.css';
import {FunCard, ClassCard} from './Card';
export function Header() {
  return (
    <div className="Header">
        
       <h1>Styling using Functional and Class Components</h1>
    </div>
  );
}

export function ButtonSec(){
  
  let [funShow,setFunShow] = useState({state:false});
  let [ClassShow,setClassShow] = useState({state:false});

  function Func(){
    funShow.state ? setFunShow({state:false}):setFunShow({state:true})

  }

  function Classc(){
    ClassShow.state ? setClassShow({state:false}): setClassShow({state:true})
  }
   return (
     <div className='con'>
     <div className='ButtonSec'>
       <button onClick={Func} 
       >To see styling in functional component
       </button>
       <button onClick={Classc}>To see styling in Class component
       </button>
     </div>
      <div className='CardSec'>
      { funShow.state && <FunCard head={'This is created using functional Coponent'} text2={'This is done using external css'} text3={'This is done using inline css'}></FunCard>}
      
     { ClassShow.state && <ClassCard  head={'This is created using Class Component'} text2={'This is done using external css'} text3={'This is done using inline css'}></ClassCard>}
      </div>
      </div>
   )
}





