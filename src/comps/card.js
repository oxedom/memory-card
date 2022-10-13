// import '../styles/styles.css'

const Card = (props) => {
    return (<section onClick={props.handleClick} className="memory-card">
        <p>{props.name}</p>
    </section>);
}

export default Card;