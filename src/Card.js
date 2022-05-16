import './App.css'

export function FunCard(props){
    
    let {head,text2,text3} =props;
    return(
        <div className='funcard'>
          <h1>{head}</h1>
          <h4>{text2}</h4>
          <h4 style={{color:"blue"}}>{text3}</h4>
        </div>
    )
}

export function ClassCard(props){

    let {head,text2,text3} =props;
    return(
        <div className='classcard' style={{backgroundColor:"Pink"}}>
          <h1>{head}</h1>
          <h4>{text2}</h4>
          <h4 style={{color:"blue"}}>{text3}</h4>
        </div>
    )
}