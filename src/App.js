// import HeaderComp from './component/HeaderComp';
// import './App.css';
// import Cart from './component/Cart';
// import Header from './component/HousingProdct/Header';
// import SearchBar from './component/HousingProdct/SearchBar';
import Product from './component/HousingProdct/Product';
// import Wrapper from './component/Wrapper';
// import Wrapper1 from './component/Wrapper1';
// import Counter from './component/Counter';
// import ParentFileForState from './component/State/ParentFileForState';
// import ProductList from './component/List/ProductList';
  

function App() {
  const UserInfo ={
    Username:"vitthal",
    Role:"student" 
    
   }  
  // const caller=()=>{
  //   console.log('function called')
  // }
 
  // const arr=[11,22,23,41]
  return (
  <>
    
   {/* <Cart></Cart>
        <HeaderComp/> */}
        {/* <Header/> */}
        {/* <SearchBar/> */}
        <Product name="Queen Panel Bed" type="household" rating={5} price={2500} image="##" available {...UserInfo}/>
        <Product name="king size Bed" type="household" rating={4} price={3500} image="##"/>
        <Product name="Single Panel Bed" type="household" rating={3} price={1500} image="##"/> 
        {/* <Wrapper obj={UserInfo} nums={[1,2,3,4]} fun={caller}></Wrapper> */}
      
        {/* <Wrapper obj={{Username:'sonu',Role:'teacher'}} nums={arr} ></Wrapper> */}
{/* <Wrapper1 {...UserInfo}/> */}
{/* <ParentFileForState/> */}
{/* <Counter/> */}
{/* <ProductList/> */}
</>
    
  );
}

export default App;
//in react produt behave like object in js we can use multiple attribute at one time in react
//<Wrapper1 {...UserInfo}> when use spred operator object directly accepatble 
//and value get unpacked value get undependet
// <Wrapper obj={UserInfo} nums={[1,2,3,4]} fun={caller}></Wrapper>its is reffrence type
// and obj and userinfo behave like object key value paired
// we aslo directly use variable type