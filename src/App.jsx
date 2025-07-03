import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let post = '강남 우동 맛집';

  return (
    <>
       <div className='black-nav'>
        <h4 style={{color:'red', fontsize : '16px'}}>블로그임</h4>
       </div>
       <div className='list'>

       </div>
      <h4>{ post }</h4>
    </>
  )
}

export default App
