import React,{useState} from 'react';


function UseColbackTrue() {
    const[input, setInput]= useState('')
    const[count, setCount] = useState(0)

    const countHandler =React.useCallback( ()=>{setCount(count +1)}, [count])
    return (
        
        <div style={{marginTop:70}}>
        <b>UseColbackTrue</b>  <br/>
        Обернули countHandler в React.useCallback и потавили зависимость от [count], теперь ребенку можно передать функцию <br/>
        <input
        type="text"
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={countHandler}>increment counter</button>
        <h3> Input text: {input}</h3>
        <h3> Count : {count}</h3>
       <p>ChildComponent</p> <ChildComponent count={count} countHandler={countHandler}/>
    </div>
    );
}

export default UseColbackTrue;




 const ChildComponent = React.memo (function ChildComponent({count,countHandler}){
    console.log('child component is UseColback');
    return <div>
        <button onClick={countHandler}>increment counter</button>
    <div> This is child component</div>
    <h3> Count : {count}</h3>
    </div>
})
