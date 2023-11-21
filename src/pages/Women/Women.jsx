import './Women.css';
import shoping from '../Images/Shop/shoping.jpg';
import dressy from '../Images/Shop/dressy.jpg';
import tops from '../Images/Shop/tops.jpg';
import pants from '../Images/Shop/pants.jpg';
import athletic from '../Images/Shop/athletic.jpg';
import Clothes from '../../Utils/Clothes';

function Women() {
  return (
    <>
      <div>
        <section className="first-page">
          <div className="front-container">
            <img
              className="front-page-img"
              src={shoping}
              alt="main-in-glasses"
            />
            <div></div>
          </div>
          <h1 className="shop-men">Shop / Women</h1>
        </section>
        <section className="second-page">
          <div className="atire-categories">
            <div>
              <img className="images" src={dressy} alt="" />
              <p>Dressy</p>
            </div>
            <div>
              <img className="images" src={tops} alt="" />
              <p>Tops</p>
            </div>
            <div>
              <img className="images" src={pants} alt="" />
              <p>Bottoms</p>
            </div>
            <div>
              <img className="images" src={athletic} alt="" />
              <p>sportware</p>
            </div>
            <div>
              <img className="images" src={athletic} alt="" />
              <p>sportware</p>
            </div>
          </div>
        </section>
        <section className="third-page">
          <div className="filter">
            <div>
              <p>Category</p>
            </div>

            <div>
              <p>Availiablity</p>
            </div>
            <div>
              <p>Price</p>
            </div>
            <div>
              <p>Other</p>
            </div>
          </div>
          <div className="products-container">
            <div>
              <div>
                <p>There are 30 results in total</p>
              </div>
            </div>

            <div className="all-products">
              {Clothes.map((item) => (
                <div key={item.id}>
                  <div className="products">
                    <div className="img-container">
                      <div className="products-title">
                        <p className="products-text">{item.name}</p>
                      </div>
                      <img src={item.imageURL} className="clothes-images" />
                      <div className="cost-category">
                        <div className="products-text2">{item.category}</div>
                        <p className="products-text">{item.cost}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Women;
