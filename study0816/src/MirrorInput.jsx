import { useState } from "react";

export default function MirrorInput(){

    const [ text, setText] = useState("")

    const handleChange=(e)=> {
        setText(e.target.value) //저장하고 리렌더링
    }
    
    const handelReset =()=>{
        setText("")
    }

    return(
        <div>
            <h2>입력한 값이 그대로 나와용</h2>
            <input value={text}
                onChange={handleChange} 
                placeholder="여기에 입력해주세용"/>
                
            <button onClick={handelReset}> 초기화 </button>

            <p>당신이 입력한 값은  <strong>{text}</strong></p>
             {/* strong 볼드스트 */}
        </div>
    )
}