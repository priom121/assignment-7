
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Details from './Components/Detail/Details'
import Header from './Components/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify'




function App() {
const [ details , setDetails] = useState([])
// const [cost , setCost] = useState(0)
// const [remaining , setRemaining] = ([])
const handleClickBtn =(names)=>{
  const exist = details.find((item)=>item.id == names.id);
  let count =names.credit ;
  if(exist){
    return toast ('already clicked') 
  }
  else{
    details.forEach((sum)=>{
      count = count + sum.credit
    })
    const totalRemaining = 20 -count
    console.log(totalRemaining);
    // setRemaining(totalRemaining)
    // console.log(count);
    const newCards = [...details , names]
    setDetails(newCards) 
  }
}
return (
  <>
    <Header></Header>
    <div className='flex justify-center'>
    <Cards  handleClickBtn={handleClickBtn}  ></Cards>
<Details details={details} ></Details>
  
    <ToastContainer /> 
    </div>
    
  </>
)
}
   




export default App
