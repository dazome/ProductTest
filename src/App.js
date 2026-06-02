// import logo from './logo.svg';
import './App.css';
import Product from './Product/Product';

function App() {
  const allproduct=[
    {id:1, pic:'pic1.jpg', name:'Asus', price:130, description:'Its an asus laptop', count:26},
    {id:2, pic:'pic2.jpg', name:'Acer', price:220, description:'Its an acer laptop', count:30},
    {id:3, pic:'pic3.png', name:'Lenovo', price:480, description:'Its a lenovo laptop', count:42}
  ]
  return (
    <div className='container' >
     <Product {...allproduct[0]}/>
     <Product {...allproduct[1]}/>
     <Product {...allproduct[2]}/>
    </div>
  );
}

export default App;
