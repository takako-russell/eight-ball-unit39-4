import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [Answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIdx]);
  };
  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: Answer.color }}
    >
      <div className="EightBall-msg" EightBall-msg>
        <b>{Answer.msg}</b>
      </div>
    </div>
  );
};

export default EightBall;
