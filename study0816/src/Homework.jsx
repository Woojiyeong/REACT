import { useState } from "react";

export default function Task({name = "익명",hobby = "자기", fav_food = "밥"}) {
  const [count, setCount] = useState(0);

  const handelPlus = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState(""); 
  const [show, setShow] = useState(false); 

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h3>{name}의 프로필</h3>
      <p>취미 : {hobby}</p>
      <p>좋아하는 음식 : {fav_food}</p>

      <p>공감: {count}</p>
      <button onClick={handelPlus}>👍</button>

      <hr />

      <input
        value={text}
        onChange={handleChange}
        type={show ? "text" : "password"}
      />
      <button onClick={toggle}>{show ? "숨기기" : "보이기"}</button>
    </div>
  );
}
