import React from 'react';

const ProductItem = (props) => {
    const isItemSingular = props.product.quantity >= 2;
    const checkTotal = props.inputQuantity === "" || props.inputQuantity == 0 || props.product.quantity == 0;
    const checkStockQuantity = props.product.quantity == 0;
    console.log(checkTotal)
    console.log("props.inputQuantity", props.inputQuantity)
    return (
        <div className="collection-item col-sm-4 col-xs-6">
            <div className="item">
                <div className="text-center">
                    <img src={props.product.img} />
                </div>
                <div className="info">
                    <div className="desc"><span className="title">Article Number:</span>&nbsp;{props.product.id}</div>
                    <div className="desc"><span className="title">Title:</span>&nbsp;{props.product.name}</div>
                    <div className="desc"><span className="title">Price:</span>&nbsp;${props.product.priceInCents}</div>
                    <div className="button-wrapper">{checkTotal ? <span></span> : <a className="shopping-cart" href="#" onClick={(e) => {props.onClickAdd(e, props.product)
    }}>Add to cart</a>}</div>
                    <div className="desc text-center"><span className="title">{checkStockQuantity ? "" : props.product.quantity}</span>&nbsp; {props.product.quantity == 0 ? <span className="outOfStock">Out of Stock</span> : isItemSingular ? 'items in stock' : 'item in stock'} </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;