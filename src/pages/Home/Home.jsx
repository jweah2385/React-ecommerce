import logo from '../Images/titlePicture.jpg'
import calvinShoes from '../Images/HompagePhotos/calvin-shoes.jpg';
import womenInTee from '../Images/HompagePhotos/women-in-brown.jpg';
import womenWithGlasses from '../Images/HompagePhotos/women-with-glasses.jpg';

import './Home.css'

function Home() {
  return (
    <>
      <div>
        <section>
          <img className="first-page-image" src={logo} />
        </section>
        <section>

    <section className="second-page">
      <div className="clothing">
        <div className="clothes-collection">
          <h1 className="clothes-sec">Collection</h1>
          <h1 className="clothes-sec1">2023</h1>
          <p className="clothes-sec2">SHOP NOW</p>
        </div>
        <img
          className="women-in-brown"
          src={womenInTee}
          alt="girl-in-red"
        />
      </div>
       <div className="asr-portion">
        <img
          className="girl-with-glasses"
          src={womenWithGlasses}
          alt="girl-with-glasses"
        />
        <div className="asr-text">
          <h1 className="accessories">Accessories</h1>
          <p className="shop-now">SHOP NOW</p>
        </div>
      </div>
      <div className="shoes-portion">
        <div className="shoes-text">
          <h1 className="shoes-spring">Shoes Spring</h1>
          <h1 className="shoes-date">2023</h1>
          <p className="shoes-shop">SHOP NOW</p>
        </div>
        <img className="shoes-img" src={calvinShoes} alt="" />
      </div> 
    </section>
        </section>

      </div>
    </>
  );
}

export default Home;
