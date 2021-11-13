import React,{useState} from 'react';

function BlockThithoutRerender() {

    return (
        <div style={{marginTop:70}}>
            <div>
               <FormInput/>
                <p>ChildComponent</p> <ChildComponent/>
            </div>
        </div>
    );
}

export default BlockThithoutRerender;



function FormInput(){
    const[input, setInput]= useState('')
 return (<div >
    BlockThithoutRerender - локализовали стэйт в отдельный компонент, чтоб
    перерендер был отдельно в компоненте form
    <input
    type="text"
    // value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <h3> Input text: {input}</h3>
    </div>
 )
}

function ChildComponent(){
    console.log('child component is rendering');
    return <div> This is child component</div>
}
