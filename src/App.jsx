
import './App.css'
import Rate from './Rate/Rate'
import Result from './result/Result'
import { useState } from 'react'


function App() {

  const [submit, setSubmit] = useState(false)
  const [rate, setRate] = useState(null)

  return (
    <>
    {submit 
      
    ?<Result 
    rate={rate} 
    setRate={setRate}
    setSubmit={setSubmit}
    submit = {submit}
    /> 
     
    :<Rate 
    rate={rate} 
    setRate={setRate}
    setSubmit={setSubmit}
    />}
    
    </>
  )
}

export default App
