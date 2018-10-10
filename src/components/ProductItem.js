import React from 'react';

const ProductItem = (props) => {
    const isItemSingular = props.item.quantity >= 2;
    return (
        <div className="collection-item col-sm-4 col-xs-6">
            <div className="item">
                <div className="text-center">
                    <img src={props.item.product.img} />
                </div>
                <div className="info">
                    <div className="desc"><span className="title">Article Number:</span>&nbsp;{props.item.product.id}</div>
                    <div className="desc"><span className="title">Title:</span>&nbsp;{props.item.product.name}</div>
                    <div className="desc"><span className="title">Price:</span>&nbsp;${props.item.product.priceInCents}</div>
                    <div className="button-wrapper">
                        <a className="shopping-cart" href="#" onClick={(e) => { props.onClickAdd(e, props.item)
                        }}>Add to cart</a>
                    </div>
                    <div className="desc text-center"><span className="title">{props.item.quantity}</span>&nbsp; {isItemSingular ? 'items' : 'item'} in stock</div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;