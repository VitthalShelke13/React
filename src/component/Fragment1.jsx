  // function Fragment (){
// return(
//     <>
//     <div>this is the fragment property</div>
//     <div>we use fragment henre to solve wrapping problem</div>
//     </>
// )
// }
// import React from 'react'
//  export default function Fragment1 (){
//     return(
//         <React.Fragment>
//         <div>this is the fragment property</div>
//         <div>we use fragment henre to solve wrapping problem</div>
//         </React.Fragment>
//     )
//     }  

import React,{Fragment} from 'react'
 export default function Fragment1 (){
    return(
        <Fragment>
        <div>this is the fragment property</div>
        <div>we use fragment henre to solve wrapping problem</div>
        </Fragment>
    )
    }  

//this is the three way to write a fragment its very useful becuase when we use parrent compent
//wraping if we use multiple time that compent its uses memory there is no use that 
// parent wrapping elements