import './Men.css'
import shoping from '../Images/Shop/shoping.jpg'
import dressy from '../Images/Shop/dressy.jpg';
import tops from '../Images/Shop/tops.jpg';
import pants from '../Images/Shop/pants.jpg';
import athletic from '../Images/Shop/athletic.jpg';
import MensProducts from '../../Utils/MensProducts';
import { useState, useEffect } from 'react';


function Men() {
  const [ selectedCategory, setCategory ] = useState('All');
  // const [ filterProducts, setFilteredProducts ] = useState('All')
   const [Dressy, setDressy] = useState(false);
  const [ Tops, setTop ] = useState(false);
  const [ Shoes, setShoes ] = useState(false)
  const [ Athletic, setAthletic ] = useState(false);
  const [ Accessories, setAccessories] = useState(false);
  const [ Pants, setPants] = useState(false)
 
  

  let userChoice = 'All';
  console.log(userChoice)
  const userCategory = (choice) => {
    userChoice = setCategory(choice.target.value);
    userChoice = choice.target.value;
    switch (userChoice) {
      case 'All':
        setTop(false), setShoes(false), setAccessories(false), setPants(false), setDressy(false), setAthletic(false);
        break;
      case 'Tops':
        setTop(true), setShoes(false), setAccessories(false), setPants(false), setDressy(false), setAthletic(false);
        break;
      case 'Shoes':
        setShoes(true), setTop(false), setAccessories(false), setPants(false), setDressy(false), setAthletic(false);
        break;
      case 'Accessories':
        setAccessories(true), setShoes(false), setTop(false), setPants(false),setDressy(false), setAthletic(false);
        break;
      case 'Pants':
        setPants(true), setAccessories(false), setShoes(false), setTop(false),setDressy(false), setAthletic(false);
        break;
      case 'Dressy':
        setDressy(true), setPants(false), setAccessories(false), setShoes(false), setTop(false), setAthletic(false);
        break;
      case 'Athletic':
        setAthletic(true) ,setPants(false), setAccessories(false), setShoes(false), setTop(false),setDressy(false);
        break;
    }

    console.log(userChoice)
  }



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
            <div className="user-filter-men">
              <label htmlFor="men-products">Category</label>
              <select
                name="products"
                onChange={userCategory}
                id="men-products"
                value={selectedCategory}
              >
                <option>All</option>
                <option>Dressy</option>
                <option>Tops</option>
                <option>Pants</option>
                <option>Athletic</option>
                <option>Accessories</option>
                <option>Shoes</option>
              </select>
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

            {/* {Tops ? (
              <div className="all-products-men">
                {MensProducts.filter((item) => item.category === 'Top').map(
                  (item) => (
                    <div key={item.id} className="products-men">
                      <div className="img-container-men">
                        <div className="products-title-men">
                          <p className="products-text-men">{item.name}</p>
                        </div>
                        <img src={item.imageURL} className="clothes-images" />
                        <div className="cost-category-men">
                          <div className="products-text2-men">
                            {item.category}
                          </div>
                          <p className="products-text-men">{item.cost}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : Shoes ? (
              <div className="all-products-men">
                {MensProducts.filter((item) => item.category === 'Shoes').map(
                  (item) => (
                    <div key={item.id} className="products-men">
                      <div className="img-container-men">
                        <div className="products-title-men">
                          <p className="products-text-men">{item.name}</p>
                        </div>
                        <img src={item.imageURL} className="clothes-images" />
                        <div className="cost-category-men">
                          <div className="products-text2-men">
                            {item.category}
                          </div>
                          <p className="products-text-men">{item.cost}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : Accessories ? (
              <div className="all-products-men">
                {MensProducts.filter(
                  (item) => item.category === 'Accessories'
                ).map((item) => (
                  <div key={item.id} className="products-men">
                    <div className="img-container-men">
                      <div className="products-title-men">
                        <p className="products-text-men">{item.name}</p>
                      </div>
                      <img src={item.imageURL} className="clothes-images" />
                      <div className="cost-category-men">
                        <div className="products-text2-men">
                          {item.category}
                        </div>
                        <p className="products-text-men">{item.cost}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : Pants ? (
              <div className="all-products-men">
                {MensProducts.filter((item) => item.category === 'Pants').map(
                  (item) => (
                    <div key={item.id} className="products-men">
                      <div className="img-container-men">
                        <div className="products-title-men">
                          <p className="products-text-men">{item.name}</p>
                        </div>
                        <img src={item.imageURL} className="clothes-images" />
                        <div className="cost-category-men">
                          <div className="products-text2-men">
                            {item.category}
                          </div>
                          <p className="products-text-men">{item.cost}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : Dressy ? (
              <div className="all-products-men">
                {MensProducts.filter(
                  (item) => item.category === 'Dressy'
                ).map((item) => (
                  <div key={item.id} className="products-men">
                    <div className="img-container-men">
                      <div className="products-title-men">
                        <p className="products-text-men">{item.name}</p>
                      </div>
                      <img src={item.imageURL} className="clothes-images" />
                      <div className="cost-category-men">
                        <div className="products-text2-men">
                          {item.category}
                        </div>
                        <p className="products-text-men">{item.cost}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : Athletic ? (  <div className="all-products-men">
                {MensProducts.filter((item) => item.category === 'Athletic').map(
                  (item) => (
                    <div key={item.id} className="products-men">
                      <div className="img-container-men">
                        <div className="products-title-men">
                          <p className="products-text-men">{item.name}</p>
                        </div>
                        <img src={item.imageURL} className="clothes-images" />
                        <div className="cost-category-men">
                          <div className="products-text2-men">
                            {item.category}
                          </div>
                          <p className="products-text-men">{item.cost}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>) :  userChoice ? (
              <div className="all-products-men">
                {MensProducts.map((item) => (
                  <div key={item.id}>
                    <div className="products-men">
                      <div className="img-container-men">
                        <div className="products-title-men">
                          <p className="products-text-men">{item.name}</p>
                        </div>
                        <img
                          src={item.imageURL}
                          className="clothes-images-men"
                        />
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
            ) : (
              <></>
            )} */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Men;
