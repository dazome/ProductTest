import './Product.css'
function Product(){
    return(
        <div>
            <h2 className='fh'>Product card</h2>
            <div className="card">
                
                <img src="pic1.jpg" alt="Product"/>
                <h1>Dandelion</h1>
                <p className="price">500$</p>
                <p>It's the best flower</p>
                <p><button>Add To Cart</button></p>
            </div>
        </div>
    )
}
export default Product;