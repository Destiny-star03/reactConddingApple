/*eslint-disable*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let post = '강남 우동 맛집';
  let [name, setName] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [good, setGood] = useState(0);




  return (
    <div className="App">
      
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={() => {name.sort(); setName([...name])}}>
        가나다순 정렬
      </button> */}

      <div className='list'>
        <h4>{name[0]} <span onClick={() => { setGood(good + 1) }}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{name[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{name[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

        <Modal></Modal>
  
      


      {/* <button onClick={() => {
       let copy = [...name];
       copy[0] = '여자 코트 추천';
       setName(copy);
      }}>글수정</button> */}
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App
