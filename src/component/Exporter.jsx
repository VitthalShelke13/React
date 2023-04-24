//let there is two type of exporter one is default and normal or naming export
// there is only one default export always
//when we use default export curly brace not use also we can choose the name as per ou choice
//in normal export or name export always use currly braces you can not choose the name as
//per your chioce
//we can use multiple normal exporter
export default function Exporter(){
    return(
        <div>this is the default exporter</div>
    )
 }

 export function exporter1(){
    return(
        <div>name exporter</div>
    )
 }
 //we use in import exporter1 from' '