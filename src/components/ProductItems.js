import React from 'react';
import ProductItem from './ProductItem';
import CartItems from './CartItems';

const ProductItems = (props) => {
    
        const products = props.items.map((item) => {
            return (
                <ProductItem 
                    onClickAdd={props.onClickAdd} 
                    item={item}
                    shoppingCart={props.shoppingCart}
                    key={item.id} />
            );
        });

        const selectedItems = props.shoppingCart.map((item, i) => {
            return (
                <CartItems
                    onClickDelete={props.onClickDelete}
                    item={item}
                    key={i} />
            );
        });

        return (
            <div className="container-area">
                <h1>Product Items</h1>
                <section className="row">
                    <section className="col-sm-8">
                        <div className="row">
                            {products}
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="row">
                            {selectedItems}
                        </div>
                        <div className="total-Wrapper">
                            <span className="total-title">Total:&nbsp;</span>
                            <span className="total-price">${(props.total).toFixed(2)}</span>
                        </div>
                    </section>
                </section>
            </div>
        );
}

export default ProductItems;