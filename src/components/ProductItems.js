import React from 'react';
import ProductItem from './ProductItem';
import CartItems from './CartItems';

const ProductItems = (props) => {
        const products = props.products.map((product) => {
            return (
                <ProductItem 
                    onClickAdd={props.onClickAdd} 
                    product={product}
                    shoppingCart={props.shoppingCart}
                    key={product.id}
                    inputQuantity={props.inputQuantity} />
            );
        });

        const selectedItems = props.shoppingCart.map((product, i) => {
            return (
                <CartItems
                    onClickDelete={props.onClickDelete}
                    product={product}
                    shoppingCart={props.shoppingCart}
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
                        <div className="text-center">
                            <form className="quantityForm">
                                <input
                                    className="quantityInput"
                                    type="number"
                                    min="1"
                                    max="10"
                                    placeholder="Quantity"
                                    value={props.inputQuantity}
                                    onChange={props.onChangeQuantity} />
                            </form>
                        </div>
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