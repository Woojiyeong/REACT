import { useState } from "react";

export default function ToggleBox(){
    const[on, setOn] = useState(false)

    const toggle = () => {
        setOn ((prev) => !prev)
    } // 이전 상태값을 받아와서 상태값을 바꿔 주는거임 상태업데이트 

    return(
        <div>
            <h2>토글박스</h2>
            <button onClick={toggle}>{on ? "끄기" : "켜기"}</button>
        </div>
    )
    //삼항연산자(조건부렌더링)
    // on ? A : B


}


