import React,{useState} from 'react';


function UseColback() {
    const[input, setInput]= useState('')
    const[count, setCount] = useState(0)

    const countHandler =(()=>{setCount(count +1)})
    return (
        
        <div style={{marginTop:70}}>
        UseColback  <br/>
        В React.memo передаем функцию, поэтому срабатывает ререндер ребенка при вводе инпут
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

export default UseColback;




 const ChildComponent = React.memo (function ChildComponent({count,countHandler}){
    console.log('child component is UseColback');
    return <div>
        <button onClick={countHandler}>increment counter</button>
    <div> This is child component</div>
    <h3> Count : {count}</h3>
    </div>
})
