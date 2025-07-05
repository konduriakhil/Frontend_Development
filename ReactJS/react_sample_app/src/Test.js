
const Test = () =>{
    let price = 3404;
    let discount = 25;
    return <div>
        <h1>Test Component</h1>
        <h4>The Price of the product is { price } and  discount is {discount}%. Final amount you need to pay is {price - price * discount / 100}</h4>
    </div>
}
export default Test