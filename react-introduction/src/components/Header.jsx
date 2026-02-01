import './Header.css';
import cart from '../assets/cart.png';


function Header({storeName, cartCount}) {
    return (
      <header className="app-header">
          <h1>{storeName}</h1>
          
          <nav className="nav-menu">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>

          <div className="cart-container"> 
            <img className="cart-icon" src={cart} alt="Cart"/>
            <span className="cart-num">{cartCount}</span>
          </div>

      </header>
    );
  }
  
  export default Header;