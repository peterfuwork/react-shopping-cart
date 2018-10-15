import React, { Component } from 'react';
import ProductHeader from './components/ProductHeader';
import ProductItems from './components/ProductItems';
import ProductFooter from './components/ProductFooter';

class App extends Component {
  constructor() {
    super();
    let products = [
      { id: 40, img:"https://dl.dropboxusercontent.com/s/m9tgkifsja610qd/favorite_animal_spring.jpg?dl=0", name: 'Mediocre Iron Watch', priceInCents: 399.99, quantity: 1 },
      { id: 41, img:"https://dl.dropboxusercontent.com/s/tm5lwhzuu7b2dlu/favorite_animal_autumn.jpg?dl=0", name: 'Heavy Duty Concrete Plate', priceInCents: 499.99, quantity: 30 },
      { id: 42, img:"https://dl.dropboxusercontent.com/s/rh3kg626xxdego6/favorite_animal_winter.jpg?dl=0", name: 'Intelligent Paper Knife', priceInCents: 1999.99, quantity: 0 },
      { id: 43, img:"https://dl.dropboxusercontent.com/s/ceb7i4rs72gl73m/favorite_animal_summer.jpg?dl=0", name: 'Small Aluminum Keyboard', priceInCents: 2500.99, quantity: 27 },
      { id: 44, img:"https://dl.dropboxusercontent.com/s/omenz4c6b31ryfu/favorite_place_spring.jpg?dl=0", name: 'Practical Copper Plate', priceInCents: 1000.99, quantity: 1 },
      { id: 45, img:"https://dl.dropboxusercontent.com/s/lt6xuqrko2qhwxg/favorite_place_autumn.jpg?dl=0", name: 'Awesome Bronze Pants', priceInCents: 399.99, quantity: 1 },
      { id: 46, img:"https://dl.dropboxusercontent.com/s/bmx93x3vd4nfq1b/favorite_place_summer.jpg?dl=0", name: 'Intelligent Leather Clock', priceInCents: 2999.99, quantity: 27 },
      { id: 47, img:"https://dl.dropboxusercontent.com/s/t1lnf1u1wyj551x/favorite_place_winter.jpg?dl=0", name: 'Ergonomic Bronze Lamp', priceInCents: 40000.99, quantity: 1 },
      { id: 48, img:"https://dl.dropboxusercontent.com/s/c3chx84zxf3yg5r/favorite_activity_summer.jpg?dl=0", name: 'Awesome Leather Shoes', priceInCents: 3990.99, quantity: 13 },
  ];
    this.state = {
      products: products,
      shoppingCart:[],
      total: 0,
      inputQuantity: "",
      newProducts: products 
    }
  }

  onClickAdd = (e, {id, img, name, priceInCents}) => {
    e.preventDefault();
    var newItem = {
      id,
      img,
      name,
      priceInCents,
      inputQuantity: this.state.inputQuantity
    }
    var newTotal = newItem.priceInCents*newItem.inputQuantity;
    this.setState({
      shoppingCart: [...this.state.shoppingCart, newItem],
      total: this.state.total + newTotal,
      inputQuantity: ""
    })
  }

  onClickDelete = (e, item, i) => {
    e.preventDefault();
    var array = [...this.state.shoppingCart];
    var i = array.indexOf(item);
    if (i > -1) {
      array.splice(i, 1);
    }
    var newTotal = this.state.total - item.priceInCents*item.inputQuantity;
    if(newTotal<0) {
      newTotal = 0;
      this.setState({
        total: newTotal
      })
    }
    this.setState({
      shoppingCart: array,
      total: newTotal
    })
  }

  onChangeQuantity = (e) => {
      e.preventDefault();
      this.setState({
        inputQuantity: e.target.value
      })
  }

  findMatches(wordToMatch, products) {
    return products.filter(product => {
      // here we need to figure out if the title or article number matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return product.id.toString().match(regex) || product.name.match(regex);
    });
  }

  onChangeSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const products = this.state.products;
    const matchArray = this.findMatches(value, products);
    console.log(matchArray)
    this.setState({
      newProducts: matchArray
    })
    // const html = matchArray.map(product => {
    //   const regex = new RegExp(value, 'gi');
    //   const id = product.id.toString().replace(regex, `<span class="hl">${value}</span>`);
    //   const name = product.name.replace(regex, `<span class="hl">${value}</span>`);
    //   return `
    //     <li>
    //       <span class="name">${id}, ${name}</span>
    //     </li>
    //   `;
    // }).join('');
    // suggestions.innerHTML = html;
  }
  
  render() {
    return (
      <div className="App">
        <ProductHeader
          onChangeSearch={this.onChangeSearch}
         />
        <ProductItems 
          products={this.state.products}
          newProducts={this.state.newProducts}
          onClickAdd={this.onClickAdd}
          onClickDelete={this.onClickDelete}
          onChangeQuantity={this.onChangeQuantity}
          shoppingCart={this.state.shoppingCart}
          total={this.state.total}
          inputQuantity={this.state.inputQuantity}
        />
        <ProductFooter />
      </div>
    );
  }
}

export default App;
