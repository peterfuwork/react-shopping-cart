import React from 'react';

const ProductHeader = (props) => {
    let fixed_flag = false; 
    let show_both = "navs fixed";
    let show_one = "navs";

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