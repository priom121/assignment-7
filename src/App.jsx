
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Details from './Components/Detail/Details'
import Header from './Components/Header/Header'

function App() {
const [ details , setDetails] = useState([])

const handleClickBtn =(names)=>{
   const newCards = [...details , names]
   setDetails(newCards)
}

  return (
    <>
      <Header></Header>
      <div className='flex justify-center'>
      <Cards handleClickBtn={handleClickBtn}></Cards>
      <Details details={details} ></Details>
      </div>
      
    </>
  )
}

export default App
