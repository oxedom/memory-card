
const Card = (props) => {
  return (
    <section onClick={props.handleClick} className="memory-card">
      <p>{props.name}</p>
      <img className="cam-img" src={props.src}></img>
    </section>
  );
};

export default Card;
