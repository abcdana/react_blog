/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '비오는 날']); 
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');
 



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>



      { 
        글제목.map(function(글, i){
          return ( <div className="list" key={i}>
                    <h3 onClick={ ()=>{ 누른제목변경(i) }}> { 글 }
                      <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 }
                    </h3>
                    <p>2월 18일 발행</p>
                    <hr/>
                  </div>
        )
        })
      
      }


      {/* react에서는 onChange 와 onInput의 결과가 똑같기 때문에 혼용해서 사용한다. */}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } }></input>


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

// 0614
// 0615
// 0616
// 0619
// 0620
// 0621
// 0622
// 0623
// 0624
// 0625
// 0626
// 0627