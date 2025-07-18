import "../css/Vote.css";
import { useState } from "react";

function Vote({ question = "투표해주세요"}) {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  const handlY = () => setYes(yes + 1);
  const handlN = () => setNo(no + 1);

  const totalVotes = yes + no;
  const yesPercentage = totalVotes > 0 ? Math.round((yes / totalVotes) * 100) : 0;
  const noPercentage = totalVotes > 0 ? 100 - yesPercentage : 0;

  return (
    <div className="container">
      <h3>Q. {question}</h3>
      <p>찬성 {yes}표</p>
      <p>반대 {no}표</p>
      <hr />
      <p>총 {yes + no} 참여</p>
      <button onClick={handlY} id="btnyes">찬성</button>
      <button onClick={handlN} id="btnno">반대</button>
      <p>찬성: {yesPercentage}% | 반대: {noPercentage}%</p>
      <div className="gauge-bar">
        <div className="yes-bar" style={{ width: `${yesPercentage}%` }}></div>
        <div className="no-bar" style={{ width: `${noPercentage}%` }}></div>
      </div>
    </div>
  );
}

export default Vote;
