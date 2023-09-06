import React, { useState } from 'react'




interface type{
  id:Number,
  content:String,
  edit:boolean
}
function App() {
  const [state, setState] = useState<type []>([])
  
  const add=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setState((states:any)=>[...states,{id:Math.random(),content:e.target.content.value,edit:false}])      
  }
  return (
    <>
    <form action="" onSubmit={add}>
      <input type="text" id='content' />
    </form>
    {state.map((v)=><h1 >{v.content}</h1>)}
    </>
  )
}

export default App
