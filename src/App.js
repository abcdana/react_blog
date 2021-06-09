/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '비오는 날']); 
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  var array = [2, 3, 4];

  var newArray = array.map(function(a){
    return a * 2
  });


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {/* <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ ()=>{modal변경(true)}}>{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div> */}

      { 
        글제목.map(function(글, i){
          return ( <div className="list">
                    <h3 onClick={ ()=>{ 누른제목변경(i) }}> { 글 }
                      <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 }
                    </h3>
                    <p>2월 18일 발행</p>
                    <hr/>
                  </div>
        )
        })
      
      }

      <button onClick={ ()=>{ 누른제목변경(0)} }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1)} }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2)} }>버튼3</button>

      <button onClick={ ()=>{modal변경(!modal) }}>열고닫기</button> 


      {
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
        : null
      }


    </div>
  );
}


// Component 문법
function Modal(props){
  return (
    <div className="modal">
        <h2>{ props.글제목[props.누른제목] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}


export default App;



// TODO : // 0을 찾을 수 없다는 에러 이유 찾기!!
// 20210606 현재까지 못찾음..
