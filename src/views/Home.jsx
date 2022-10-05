import React, { useState } from 'react'
import Portal from '../components/Portal';
const Home = () => {
  const [modal, setModal] = useState(true)
  return (
    <>
      <button onClick={()=>{
        setModal(true)
      }}>abrir</button>
      <Portal isShown={modal} close={() => { setModal(false) }} element={<p>hola</p>} />
    </>
  )
}

export default Home