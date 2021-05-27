/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '비오는 날']); 
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  function repeatUI(){

    var array = [];
    for (var i = 0; i < 3; i++){
      array.push(<div>안녕</div>);
    }

    return array
  }
  

  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }

  // let posts = '강남 고기 맛집';

  // #### modal창으로 만드는 상세페이지


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}
      <div className="list">
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
      </div>

      { repeatUI() }

      {/* 중괄호 안에 넣을 수 있는 반복문 -> 함수 */}
      {
        // a는 각 하나하나의 데이터이다.
        // 데이터 자체가 반복시마다 바뀌기 때문에 tag안의 값도 바뀐다.
        글제목.map(function(a){
          return (
                  <div className="list">
                    <h3>{ a }</h3>
                    <p>2월 18일 발행</p>
                    <hr/>
                  </div>
          )
        })

      }

      {/* <button onClick={ ()=>{modal변경(!modal) }}>버튼</button> */}

      {/* <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>  */}

      {
        modal === true
        ? <Modal></Modal>
        : null
      }


    </div>
  );

  // <주의> return 안에는 <div>하나의 태그만 존재할 수 있다. 평행으로 여러개의 태그를 만들 수 없다. 아래와 같이 설계 불가능!

  // return (
  //   <div></div>
  //   <div></div>
  //   <div></div>
  // )

}


// Component 문법
function Modal(){
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}


export default App;
