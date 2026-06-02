import './Product.css'
function Product(props){
    // if(props.count>0){
    // return(
        // <div>
        //     <h2 className='fh'>Product card</h2>
        //     <div className="card">
                
        //         <img src={props.pic} alt="Product" height={250}/>
        //         <h1>{props.name}</h1>
        //         <p className="price">${props.price}</p>
        //         <p>{props.description}</p>
        //         <p><button>Add To Cart</button></p>
        //     </div>
           
        // </div>
    // )}
    // return null

    return(
        props.count &&
    <div>
            <h2 className='fh'>Product card</h2>
            <div className="card">
                
                <img src={props.pic} alt="Product" height={250}/>
                <h1>{props.name}</h1>
                <p className="price">${props.price}</p>
                <p>{props.description}</p>
                <p><button>Add To Cart</button></p>
            </div>
           
        </div>
    )
}
export default Product;