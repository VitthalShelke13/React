//  import { useState } from "react";
// import ConditonalReturns from "./componentV1/ConditonalReturns";
// import './AppV1.css'
// import InlineStyle from "./componentV1/InlineStyle";
// import Forms from "./componentV1/form/Forms";
// import { Forms2 } from "./componentV1/form/Forms2";
// import { AddressForm } from "./componentV1/form/AddressForm";
// import { FormValidation } from "./componentV1/form/FormValidation";
// import { FormValidation1 } from "./componentV1/form/FormValidation1";
// import FirstClassComponent from "./ClassComponent/FirstClassComponent";
// import ComponentOne from "./ClassComponent/LifeCycle/Phase1/ComponentOne";
// import LifeCycle from "./ClassComponent/LifeCycle/Phase1/LifeCycle";
//  import LifeCycleUpdationPhase from "./ClassComponent/LifeCycle/phase2/LifeCycleUpdationPhase";
// import LifeCycleRemovalPhase from "./ClassComponent/LifeCycle/phase3/LifeCycleRemovalPhase";
// import StateExmpleCl from "./ClassComponent/LifeCycle/State1/StateExmpleCl";
// import { FormValidationReff } from "./componentV1/form/FormValidationReff";
// import ExampleOfMethod from "./ClassComponent/LifeCycle/phase2/ExampleOfMethod";
import UseEffect from "./component/Hooks/UseEffect";
import UseEffectasync from "./component/Hooks/UseEffectasync";
 
export default function AppV1(){
    // const[theme,settheme]=useState(true)

    // function Toggle(){
    //     settheme(!theme)
    //     //this is another way to add condtion we also add directly in return statement
    // }
    //  const[show,setShow]=useState(true)//it is for phase3

    // const[name,setname]=useState('vitthal') // it is for examplemethod 
    return(
        <>
        {/* <h2>AppV1 Rendering</h2>
        <div>Theme:{theme?'1':'2'}</div> */}
{/* <ConditonalReturns theme={theme} /><br/> */}
{/* <button onClick={()=>settheme(!theme)}>Toggle</button> */}
{/* <button onClick={Toggle}>change the conditon</button> */}
{/* <InlineStyle/> */}
{/* <Forms/><br/> */}
{/* <Forms2/> */}
{/* <AddressForm/> */}
{/* <FormValidation/> */}
{/* <FormValidation1/> */}
{/* <FormValidationReff/> */}
{/* <ComponentOne name="vittha"/> */}
{/* <FirstClassComponent/> */}
{/* <StateExmpleCl/> */}
{/* <LifeCycle/> */}
{/* <LifeCycleUpdationPhase/>
{show&& <LifeCycleRemovalPhase/>}
<button onClick={()=>setShow(!show)}>Toggle</button> */}
{/* <ExampleOfMethod myname='vitthal'/> */}

{/* <ExampleOfMethod myname={name}/>
<button onClick={()=>setname('rahul')}>toggle</button> */}
<UseEffect/>
<UseEffectasync/>
        </>
    )
}