import React from 'react';

const CartItems = (props) => {
    return (
        <div className="col-sm-12 shoppingCartItem" key={props.i}>
            <a className="delete-btn" href="#" onClick={(e) => props.onClickDelete(e, props.item, props.i)}>X</a>
            <img src={props.item.product.img} className="img" />
            <div className="name">{props.item.product.name}</div>
            <div className="price">${props.item.product.priceInCents}</div>
        </div>
    );
}

export default CartItems;