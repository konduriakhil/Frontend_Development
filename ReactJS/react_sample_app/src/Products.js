import { Component } from "react";

import loaderimg from './images/loading.gif'

class Products extends Component
{

    constructor(){
        super();
        this.state={
            products: [],
            loader: false
    }
}

    componentDidMount(){

        this.setState({
            loader: true
        })

        let obj = new XMLHttpRequest();
        obj.open('GET', 'https://fakestoreapi.com/products', true);
        obj.send()
        obj.onreadystatechange = () =>{
            if(obj.readyState === 4 && obj.status == 200)
            {
                const data = JSON.parse(obj.responseText);
               this.setState({
                products: data,
                loader:  false
               })
            }
        }
    }

    render(){
        return <div>
            <h1>Products List</h1>
            <p>Length: {this.state.products.length}</p>
            
            {
                this.state.loader ? <img src={loaderimg} alt="loading image" height={50} width={50}/> : null
            }

            <div class='blocks'>
                {
                    this.state.products.map((item, index) =>
                    <div key={index} class='item'>
                        <img src={item.image} height={100} width={150} alt={item.title}/>
                        <h4>{item.title}</h4>
                        <p>Price: {item.price}</p>
                    </div>)
                }
            </div>
        </div>
    }
}
export default Products