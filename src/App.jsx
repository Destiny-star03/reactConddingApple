/*eslint-disable*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let post = '강남 우동 맛집';
  let [name,setName] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [good,setGood] = useState(0);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{name[0]} <span onClick={ ()=> { setGood(good+1)}}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
        <p><span onClick={ () => {
          const newName = [...name];
          newName[0] ='여자 코트 추천';
          setName(newName)}}>글 제목 변경</span></p>
      </div>
      <div className='list'>
        <h4>{name[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
          <div className='list'>
        <h4>{name[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App
