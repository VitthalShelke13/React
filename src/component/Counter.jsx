import { useState } from "react"

const Counter=()=>{
    const[count,setCount]=useState(0)

    const incrementBy1=()=>{
setCount((previousState)=>previousState+1)
    }
    console.log(count)
 return(
<>
<div>Counter:{count}</div>
<button onClick={incrementBy1}>+</button>
<button>+5</button>
</>
 )
}
export default Counter