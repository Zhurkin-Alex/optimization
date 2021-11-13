import React,{useState} from 'react';


function BlockCountRerender() {
    const[input, setInput]= useState('')
    const[count, setCount] = useState(0)

    return (
        
        <div style={{marginTop:70}}>
        BlockCountRerender <b> React.memo:false</b> <br/>
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

export default BlockCountRerender;



// const ChildComponent = React.memo ()
 function ChildComponent({count}){
    console.log('child component is rendering therst block');
    return <div>
    <div> This is child component</div>
    <h3> Count : {count}</h3>
    </div>
}
