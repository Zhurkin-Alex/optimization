import React,{useState} from 'react';


function BlockCountThethuutRerender() {
    const[input, setInput]= useState('')
    const[count, setCount] = useState(0)

    return (
        
        <div style={{marginTop:70}}>
        Сделал <b> React.memo </b> для дочернего компонента, <br/>в итоге он перерендеривается только при изменениее count<br/>
        работает только с примитивнфми пораметрами <br/>
        <input
        type="text"
        // value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={()=>{setCount(count +1)}}>increment counter</button>
        <h3> Input text: {input}</h3>
        <h3> Count : {count}</h3>
       <p>ChildComponent</p> <ChildComponent count={count}/>
    </div>
    );
}

export default BlockCountThethuutRerender;




 const ChildComponent = React.memo (function ChildComponent({count}){
    console.log('child component is BlockCountThethuutRerender');
    return <div>
    <div> This is child component</div>
    <h3> Count : {count}</h3>
    </div>
})
