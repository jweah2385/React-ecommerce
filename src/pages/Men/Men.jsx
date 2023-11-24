import './Men.css'
import shoping from '../Images/Shop/shoping.jpg'
import dressy from '../Images/Shop/dressy.jpg';
import tops from '../Images/Shop/tops.jpg';
import pants from '../Images/Shop/pants.jpg';
import athletic from '../Images/Shop/athletic.jpg';
import Clothes from '../../Utils/Clothes';

function Men() {
  return (
    <>
      <div>
        <section className="first-page-men">
          <div className="front-container">
            <img
              className="front-page-img-men"
              src={shoping}
              alt="main-in-glasses"
            />
            <div></div>
          </div>
          <h1 className="shop-men">Shop / Men</h1>
        </section>
        <section className="second-page-men">
          <div className="atire-categories-men">
            <div className="each-category">
              <img className="images-men" src={dressy} alt="" />
              <p>Dressy</p>
            </div>
            <div className="each-category">
              <img className="images-men" src={tops} alt="" />
              <p>Tops</p>
            </div>
            <div className="each-category">
              <img className="images-men" src={pants} alt="" />
              <p>Bottoms</p>
            </div>
            <div className="each-category">
              <img className="images-men" src={athletic} alt="" />
              <p>sportware</p>
            </div>
            <div className="each-category">
              <img className="images-men" src={athletic} alt="" />
              <p>sportware</p>
            </div>
          </div>
        </section>
        <section className="third-page-men">
          <div className="filter-men">
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
          <div className="products-container-men">
            <div>
              <div>
                <p>There are 30 results in total</p>
              </div>
            </div>
            <div className="all-products">
              {Clothes.map((item) => (
                <div key={item.id}>
                  <div className="products-men">
                    <div className="img-container-men">
                      <div className="products-title-men">
                        <p className="products-text-men">{item.name}</p>
                      </div>
                      <img src={item.imageURL} className="clothes-images-men" />
                      <div className="cost-category-men">
                        <div className="products-text2-men">
                          {item.category}
                        </div>
                        <p className="products-text-men">{item.cost}</p>
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

export default Men;
