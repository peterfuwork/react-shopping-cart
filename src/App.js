import React, { Component } from 'react';
import ProductHeader from './components/ProductHeader';
import ProductItems from './components/ProductItems';
import ProductFooter from './components/ProductFooter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, product: { id: 40, img:"https://via.placeholder.com/500x500", name: 'Mediocre Iron Watch', priceInCents: 399.99 }, quantity: 1 },
        { id: 2, product: { id: 41, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 3, product: { id: 42, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
        { id: 4, product: { id: 43, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 5, product: { id: 44, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
        { id: 6, product: { id: 45, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 7, product: { id: 46, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
        { id: 8, product: { id: 47, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 9, product: { id: 48, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
        { id: 10, product: { id: 49, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 11, product: { id: 50, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
        { id: 12, product: { id: 51, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 13, product: { id: 52, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
        { id: 14, product: { id: 53, img:"https://via.placeholder.com/500x500", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99 }, quantity: 2 },
        { id: 15, product: { id: 54, img:"https://via.placeholder.com/500x500", name: 'Intelligent Paper Knife', priceInCents: 1999.99 }, quantity: 1 },
      ],
      shoppingCart:[],
      total:0
    }
  }

  onClickAdd = (e, item) => {
    e.preventDefault();
    this.setState({
      shoppingCart: [...this.state.shoppingCart, item],
      total: this.state.total + item.product.priceInCents,
    })
  }

  onClickDelete = (e, item, i) => {
    e.preventDefault();
    var array = [...this.state.shoppingCart];
    var i = array.indexOf(item);
    if (i > -1) {
      array.splice(i, 1);
    }
    var newTotal = this.state.total - item.product.priceInCents;
    console.log('newTotal',newTotal);
    console.log('total',this.state.total);
    this.setState({
      shoppingCart: array,
      total: newTotal
    })
  }
  
  render() {
    return (
      <div className="App">
        <ProductHeader />
        <ProductItems 
          items={this.state.items} 
          onClickAdd={this.onClickAdd}
          onClickDelete={this.onClickDelete} 
          shoppingCart={this.state.shoppingCart}
          total={this.state.total}
          quantity={this.state.quantity} />
        <ProductFooter />
      </div>
    );
  }
}

export default App;
