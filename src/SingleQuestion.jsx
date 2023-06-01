import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
