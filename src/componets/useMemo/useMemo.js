import React from 'react';
 
function useMemos() {
   const [value, setValue] = React.useState(0);
//    const [value1, setValue1] = React.useState(0);

   const heavyProcessing = () => {
     // Do some heavy processing with the parameter
    //  setValue(value*5)
     console.log(`Cached memo: ${value}`);
     return value;
   };
 
   const memoizedResult = React.useMemo(heavyProcessing, [value]);
   
   return (
     <div style={{marginTop:70}}>
       <ExampleChild value={memoizedResult} />
       <button onClick={() => setValue(value + 1)}>
         Change memo
       </button><br/>
       {/* <button onClick={() => setValue1(value1 + 1)}>
         Change memo1
       </button>
       <p>value1 - {value1}</p> */}
     </div>
   )
}
export default useMemos;

function ExampleChild({ value }) {
    const [childValue, setChildValue] = React.useState(0);
 
    React.useEffect(() => {
      setChildValue(childValue + 1);
    }, [value])
 
    return <p>Child value: {childValue}</p>;
}