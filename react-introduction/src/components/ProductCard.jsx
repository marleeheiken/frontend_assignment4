import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
    return (
        
      <div className="product-card">

        <img src={image} alt={name} />
  
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
      </div>
    );
  }
  
  // Every component file must export the component
  export default ProductCard;

  

  