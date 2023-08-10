import FlashCard from "../models/FlashCard";
import "./Card.css";

interface Props {
  card: FlashCard;
}

const Card = ({ card }: Props) => {
  const clickHandler = (e: any) => {
    if (
      e.target.classList.contains("front") ||
      e.target.classList.contains("back")
    ) {
      e.target.parentNode.classList.toggle("flip");
    } else if (e.target.tagName === "P") {
      e.target.parentNode.parentNode.classList.toggle("flip");
    }
  };
  return (
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
        </div>
      </div>
    </li>
  );
};

export default Card;
