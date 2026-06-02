// import logo from './logo.svg';
import './App.css';
import Product from './Product/Product';

function App() {
  return (
    <div className='container' >
     <Product pic="pic1.jpg" name="asus" price={120} description="Its an asus laptop"/>
     <Product pic="pic2.jpg" name="acer" price={220} description="Its an acer laptop"/>
     <Product pic="pic3.png" name="hp" price={480} description="Its an lenovo laptop"/>
    </div>
  );
}

export default App;
