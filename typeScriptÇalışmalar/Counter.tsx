
// Hook with funtional component
import React, {useState} from 'react'


function Counter() {
    const [count,setCount]=useState(0);
   
    const increment =()=>{
       setCount(count+1); 

    }
    const decrement =()=>{
       setCount(count-1);

    }
  return (
    <div>
         <p> The count is : {count}  </p>
         <button type='button' className='btn btn-primary btn-sm' onClick={decrement}> -  </button>
         <button type='button' className='btn btn-primary btn-sm' onClick={increment}> +  </button>
    </div>
  )
}

export default Counter