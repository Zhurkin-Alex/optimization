import React,{useState} from 'react';

function Blocks() {

    const[input, setInput]= useState('')

    return (
        <div>
            Block
            <input
            type="text"
            // value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <h3> Input text: {input}</h3>
           <p>ChildComponent</p> <ChildComponent/>
        </div>
    );
}



function ChildComponent(){
    console.log('child component is rendering therst block');
    return <div> This is child component</div>
}
export default Blocks;