import "./FeatureCard.css";

function Card({image, text}) {
  return (
    <div className="CardWrapper">
        <img className="CardImage" src={image} alt=""/>
        <div>
            <h2>{text}</h2>
            <p>Soundtrack</p>
        </div>
    </div>
  );
}

export default Card;