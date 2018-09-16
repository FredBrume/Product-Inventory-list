
import React, { Component } from 'react';
import Product from './Component/Product';
import './App.css';
import Seed from './Model/Seed';

class ProductList extends Component {

  constructor(props){
    super(props);
    this.state = {products: []};
    this.onVoteClick = this.onVoteClick.bind(this);
  }

  componentDidMount(){
    this.setState({products: Seed.item})
  }

  onVoteClick(product_id){
    let copiedProducts = this.state.products.map((product) =>{
      if(product.id === product_id){
        return Object.assign({},product,
          {
            vote:product.vote + 1,
          });
      }else{
        return product;
      }
    });

    this.setState({products: copiedProducts});
  }

  render() {
    const productComponents = this.state.products.map((product)=> (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        vote={product.vote}
        productImageUrl={product.productImageUrl}
        voteClick= {this.onVoteClick} />

    ));
    return (
      <div className= "container">
        {productComponents}
      </div>
    );
  }
}

export default ProductList;
