import Hello from "./Hello"

// function App(){ //컴포넌트 이름은 반드시 대문자로 시작
//   //<App/> 대문자로 시작해야 함 - html 태그와 구분하기 위해
//   const name = "지영"
//   return( //화면에 그릴 내용을 리턴에 나옴 jsx 문법 / div 하나만 씀
//     <div>
//       <h1> 리액트 스터디 출석부 </h1>
//       <Hello name="다연" emoji="❤️" color ="green"/>
//       <Hello name="지영" emoji="👍" color ="red" />
//       <Hello/>
//     </div>
//   )
// }
function App(){
  return (
    <div>
    <Hello name = "지영" hobby="잠쿨쿨자기" fav_food="엽기떡볶이"/>
    <Hello name = "이레" hobby="불멍 물멍" fav_food="연어"/>
    <Hello name = "성연" hobby="늦잠자기" fav_food="마라탕 속 감자"/>
    </div>
  )
}
export default App // 밖으로 내보내야 다른 곳에서 사용가능 

// //Hello를 썼으니 부모