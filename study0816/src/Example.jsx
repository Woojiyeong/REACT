import { useState } from "react"
//무조건 import 해야함

export default function Count(){
    const [count, setCount ] = useState(0); //초기갑 0

    const handelPlus=()=>{
        setCount(count+1)
    }
    const handelMinus=()=>{
        setCount(count-1)
    }  // = () => 화살표 함수 : 코드 간결성 / this 바인딩을 하지 않음 / 변수처럼 다룸 

    return(
        <div>
            <h2>카운터</h2>
            <p>현재값: {count}</p>

            <button onClick={handelPlus}>+1</button>
            <button onClick={handelMinus}>-1</button>
        </div>
    )
    // 이벤트 : 사용자가 화면과 상호작용할 때 발생하는 사건
    //ex) 버튼클릭, 입력창에 글자 입력, 마우스 움직였을 때, 키보드 눌렀을 때
    // 이 사건 이 일이 생기면 이 함수를 실행 해! -> 이벤트 처리

}
