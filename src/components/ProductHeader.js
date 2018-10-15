import React from 'react';

const ProductHeader = (props) => {
    return (
        <nav className="navs">
            <a className="link" href="#">Shopping Cart</a>
            <div className="searchBox">
                <input 
                    className="search"
                    placeholder="Search"
                    onChange={(e) => props.onChangeSearch(e)}
                />
            </div>
        </nav>
    );
}

export default ProductHeader;