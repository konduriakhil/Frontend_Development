import { Component } from "react";
import loaderimg from './images/loading.gif'

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loader: false
    };
  }

  fetchProductsList = () => {
    this.setState({
        loader: true
    })
    let obj = new XMLHttpRequest();
    obj.open("GET", "https://fakestoreapi.com/products", true);
    obj.send();
    obj.onreadystatechange = () => {
      if (obj.readyState === 4 && obj.status === 200) {
        const data = JSON.parse(obj.responseText);
        this.setState({
          products: data,
          loader: false
        });
      }
    };
  };

  render() {
    return (
      <div>
        <h1>Product List Component</h1>
        <p>Length: {this.state.products.length}</p>
                    
        {
            this.state.loader ? <img src={loaderimg} alt="loading image" height={50} width={50}/> : null
        }
        <button onClick={this.fetchProductsList}>Load Products</button>

        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
