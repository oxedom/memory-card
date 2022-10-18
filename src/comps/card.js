
const Card = (props) => {
  return (
    <section onClick={props.handleClick} className="memory-card">
      <div className="img-container">
        <img className="cam-img" src={props.src}></img>
      </div>
      <h4 className="cam-name">{props.name}</h4>

    </section>
  );
};

export default Card;
