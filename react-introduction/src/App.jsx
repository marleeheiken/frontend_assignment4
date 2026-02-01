import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem'
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const products = [
    {
      id: 1,
      name: "Pencil",
      price: 0.99,
      image: "https://placehold.co/600x400",
      description: "Sharpened lead writing utinsil with eraser."
    },
    {
      id: 2,
      name: "Pen",
      price: 1.29,
      image: "https://placehold.co/600x400",
      description: "Ink powered clickable writing utinsil."
    },
    {
      id: 3,
      name: "Paper",
      price: 0.33,
      image: "https://placehold.co/600x400",
      description: "8x11 flat white construction paper to write on."
    },
    {
      id: 4,
      name: "Binder",
      price: 1.99,
      image: "https://placehold.co/600x400",
      description: "3 ring binder with pen holder."
    },
    {
      id: 5,
      name: "Notebook",
      price: 2.29,
      image: "https://placehold.co/600x400",
      description: "Spiral notebook with college ruled lined paper."
    },
    {
      id: 6,
      name: "Mackbook Air",
      price: 1029.00,
      image: "https://placehold.co/600x400",
      description: "14 inch Macbook air with M2 chip and 8 gigs of ram"
    }
  ];

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(newCartItems);
    setCartCount(newCartItems.length);
  };
  

  return (
    
    <div className="app">

      <Header 
      storeName="School Supplies Store"
      cartCount= {cartCount}
      />
      

      <Hero 
        heroTitle={
          <>
            Welcome to <br />
            ComponentCorner
          </>
        }
        heroPara={
          <>
            Discover amazing products built <br />
            using React components
          </>
        }
        heroButton = "Shop now"
        image = "https://placehold.co/1200x400/667eea/ffffff?text"
      />

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => 
              addToCart(product)}
          />
        ))}
      </div>

      <section className="cart-section">
        <h2>Your Cart</h2>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}        
                name={item.name}
                price={item.price}
                onRemove={removeFromCart}
              />
            ))}

            <h3 className="cart-total">
              Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </h3>
          </>
        ) : (
          <p className="empty-cart" >Your cart is empty.</p>
        )}
      </section>


      <Footer
        title = "ComponentCenter"
        storeName = "School Supplies Store"
        storeEmail = "componentcenter.bushnell.edu"
        storePhone = "541.602.9963"
        storeLocation = "123 Bushnell St. Eugene, OR"

      />

    </div>
  );
}

export default App;



