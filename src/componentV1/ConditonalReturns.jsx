export default function ConditonalReturns(props){
let themeName;
if(props.theme){
    themeName='theme1'
}else{
    themeName='theme2'
}
    
    if(props.theme){
    return(

       <>
       <h2 className={themeName}>FlipCart</h2>
       <div className="traditional">Traditional Section</div>
       <div>Type 1 Component</div>
       </> 

    )
    }else{
        return(
            <>
              <h2 className={themeName}>FlipCart</h2>
       <div>Grossary Section</div>
       <div>Type 2 Component</div>
            </>
        )
    }
}