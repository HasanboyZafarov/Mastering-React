import React from "react";

const Card = () => {
    return (
        <div>
            <div className="wrapper">
                <i className="fa-brands fa-instagram card__icon"></i>
                <h1 className="card__heading">Its a card</h1>
                <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti eaque consectetur, molestiae doloribus neque rem
                    impedit expedita deserunt dolor qui?
                </p>
                <button className="card__btn">Oddiy Knopka</button>
            </div>
        </div>
    );
};

export default Card;
