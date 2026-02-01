import './Hero.css';

function Hero({ heroTitle, heroPara, heroButton, image }) {
    return (
      <section
        className="app-hero"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1>{heroTitle}</h1>
        <p>{heroPara}</p>
        <button>{heroButton}</button>
      </section>
    );
  }
  
  export default Hero;
  
  