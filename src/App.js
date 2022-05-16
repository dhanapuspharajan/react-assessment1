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
  
  let [funV,setFunVisible] = useState('hidden');
  let [ClassV,setClassVisible] = useState('hidden');

  function Func(){
    funV ==='hidden' ? setFunVisible('visible'):setFunVisible('hidden')
  }

  function Classc(){
   ClassV === 'hidden' ? setClassVisible('visible'): setClassVisible('hidden')
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
       <FunCard
        visibility={funV} 
       head={'This is created using functional Component'} 
       text2={'This is done using external css'}
        text3={'This is done using inline css'}>
        </FunCard>
      
      <ClassCard
      visibility={ClassV} 
      head={'This is created using Class Component'}
       text2={'This is done using external css'} 
       text3={'This is done using inline css'}>
       </ClassCard>
      </div>
      </div>
   )
}





