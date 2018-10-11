import React from 'react';

const CartItems = (props) => {
    return (
        <div className="shoppingCartItem" key={props.i}>
            <a className="delete-btn" href="#" onClick={(e) => props.onClickDelete(e, props.product, props.i)}>X</a>
            <img src={props.product.img} className="img" />
            <div className="name">{props.product.name}</div>
            <div className="price">${props.product.priceInCents}</div>
            <div className="quantity">X{props.product.inputQuantity}</div>
        </div>
    );
}

export default CartItems;