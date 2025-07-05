import { Component } from "react";

class TestCls extends Component
{
 price = 4567;

    render()
    {
        let  discount = 37;
        return <div>
            <h1>Class Component</h1>
            <h3>The Price of the product is { this.price } and  discount is {discount}%. Final amount you need to pay is {this.price - this.price * discount / 100}</h3>
        </div>
    }
}

export default TestCls