import { useEffect, useState } from "react";
import FlashCard from "../models/FlashCard";
import "./Card.css";

interface Props {
  card: FlashCard;
}

const Card = ({ card }: Props) => {
  const [showEx, setShowEx] = useState<boolean>(false);

  const clickHandler = (e: any) => {
    if (
      e.target.classList.contains("front") ||
      e.target.classList.contains("back")
    ) {
      e.target.parentNode.classList.toggle("flip");
    } else if (e.target.classList.contains("exit-example")) {
      e.target.parentNode.classList.add("hidden");
    } else if (e.target.tagName === "P") {
      e.target.parentNode.parentNode.classList.toggle("flip");
    } else if (e.target.classList.contains("example-btn")) {
      // console.dir(e.target.parentNode.parentNode.parentNode.nextSibling);
      e.target.parentNode.parentNode.parentNode.nextSibling.classList.remove(
        "hidden"
      );
    }
  };
  return (
    <>
      <li className="Card flip-card">
        <div className={`flip-card-inner`}>
          <div className="front" onClick={clickHandler}>
            {card.question.map((item, i) => (
              <p key={`${item}${i}`}>{item}</p>
            ))}
          </div>
          <div className="back" onClick={clickHandler}>
            {card.answer.map((item, i) => (
              <p key={`${item}${i}`}>{item}</p>
            ))}
            {card.example?.length && (
              <button
                className={`example-btn`}
                onClick={(e) => {
                  clickHandler(e);
                }}
              >
                see example
              </button>
            )}
          </div>
        </div>
      </li>
      <div className={`example hidden`}>
        <p
          className="exit-example"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          X
        </p>
        {card.example?.map((line, i) => (
          <p key={`${line}${i}`}>{line}</p>
        ))}
      </div>
    </>
  );
};

export default Card;
