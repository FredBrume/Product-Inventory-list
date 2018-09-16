
import React,{ Component } from 'react';
// import './App.css';

class Product extends Component{

  constructor(props){
    super(props);
    this.handleOnClickVote = this.handleOnClickVote.bind(this);
  }

  handleOnClickVote(){
    this.props.voteClick(this.props.id);
  }
  render(){  //value of THIS is the component because it is present in the RENDER function
    return(
      <div className='product-container'>
        <div className='product-image-div'>
          <img className='product-image' src={this.props.productImageUrl}/>
        </div>
        <div className='product-summary'>
          <p className='product-vote' onClick= {this.handleOnClickVote}>{this.props.vote}</p>
          <p className='product-name'>{this.props.title}</p>
          <p className='product-description'>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Product;
