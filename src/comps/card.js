
const Card = (props) => {
  return (
    <section onClick={props.handleClick} className="memory-card">
      <img className="cam-img" src={props.src}></img>
      <h4>{props.name}</h4>

    </section>
  );
};

export default Card;
