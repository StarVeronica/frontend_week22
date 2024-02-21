function Card(props) {
    return (
        <div className="card">
            <h4 className="card-title">{props.title}</h4>
            <div className="card-body">
                <p className="card-universe">Вселенная: {props.universe}</p>
                <p className="card-alterego">Альтер эго: {props.alterego}</p>
                <p className="card-occupation">Род деятельности: {props.occupation}</p>
                <p className="card-friends">Друзья: {props.friends}</p>
                <p className="card-superpowers">Суперсилы: {props.superpowers}</p>
                <img src={props.url} alt={props.title}/>
            </div>
            {/* <div className="card-footer">
                
                <span className="card-price">${props.price}</span>
                <button className="card-add">Заказать</button>
            </div> */}
        </div>
    );
}

export default Card;
