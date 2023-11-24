import logo from '../Images/titlePicture.jpg';
import calvinShoes from '../Images/HompagePhotos/calvin-shoes.jpg';
import womenInTee from '../Images/HompagePhotos/women-in-brown.jpg';
import womenWithGlasses from '../Images/HompagePhotos/women-with-glasses.jpg';
import Clothes from '../../Utils/Clothes';
import aboutPortrait from '../Images/HompagePhotos/women-in-black.jpg'

import './Home.css';

function Home() {
  return (
    <>
      <div>
        <section>
          <img className="first-page-image-home" src={logo} />
        </section>

        <section className="second-page-home">
          <div className="clothing-home">
            <div className="clothes-collection-home">
              <h1 className="clothes-sec-home">Collection</h1>
              <h1 className="clothes-sec1-home">2023</h1>
              <p className="clothes-sec2-home">SHOP NOW</p>
            </div>
            <img
              className="women-in-brown-home"
              src={womenInTee}
              alt="girl-in-red"
            />
          </div>
          <div className="asr-portion-home">
            <div className="asr-text-home">
              <h1 className="accessories-home">Accessories</h1>
              <p className="shop-now-home">SHOP NOW</p>
            </div>
            <img
              className="girl-with-glasses-home"
              src={womenWithGlasses}
              alt="girl-with-glasses"
            />
          </div>
          <div className="shoes-portion-home">
            <div className="shoes-text-home">
              <h1 className="shoes-spring-home">Shoes Spring</h1>
              <h1 className="shoes-date-home">2023</h1>
              <p className="shoes-shop-home">SHOP NOW</p>
            </div>
            <img className="shoes-img-home" src={calvinShoes} alt="" />
          </div>
        </section>

        <section className="third-page-home">
          <div className="purchase-headers-home">
            <h2 className="purchase-titles-home">Best Sellers</h2>
            <h2 className="purchase-titles-home">New Arrivals</h2>
            <h2 className="purchase-titles-home">All products</h2>
          </div>
          <div className="all-products-home">
            {Clothes.map((item) => (
              <div key={item.id}>
                <div className="products-home">
                  <div className="img-container-home">
                    <div className="products-title-home">
                      <p className="products-text-home">{item.name}</p>
                    </div>
                    <img src={item.imageURL} className="clothes-images-home" />
                    <div className="cost-category-home">
                      <div className="products-text2-home">{item.category}</div>
                      <p className="products-text-home">{item.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="fourth-section">
          <div className="">
            <h1 className="connected">Connected Commerce Tools</h1>
            <p className="connect-mes">
              Discover the latest trends and styles at our fashion company! Join
              now to explore our vast collection and see why many brands trust
              us.
            </p>
            <p className="learn">LEARN MORE</p>
            <div className="brands">
              <div>
                <svg
                  className="google"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </div>
              <div>
                <svg
                  className="post-office"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M460.3 241.7c25.8-41.3 15.2-48.8-11.7-48.8h-27c-.1 0-1.5-1.4-10.9 8-11.2 5.6-37.9 6.3-37.9 8.7 0 4.5 70.3-3.1 88.1 0 9.5 1.5-1.5 20.4-4.4 32-.5 4.5 2.4 2.3 3.8.1zm-112.1 22.6c64-21.3 97.3-23.9 102-26.2 4.4-2.9-4.4-6.6-26.2-5.8-51.7 2.2-137.6 37.1-172.6 53.9l-30.7-93.3h196.6c-2.7-28.2-152.9-22.6-337.9-22.6L27 415.8c196.4-97.3 258.9-130.3 321.2-151.5zM94.7 96c253.3 53.7 330 65.7 332.1 85.2 36.4 0 45.9 0 52.4 6.6 21.1 19.7-14.6 67.7-14.6 67.7-4.4 2.9-406.4 160.2-406.4 160.2h423.1L549 96z" />
                </svg>
              </div>
              <div>
                <svg
                  className="pay-pal"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
                </svg>
              </div>
              <div>
                <svg
                  className="stripe"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M155.3 154.6c0-22.3 18.6-30.9 48.4-30.9 43.4 0 98.5 13.3 141.9 36.7V26.1C298.3 7.2 251.1 0 203.8 0 88.1 0 11 60.4 11 161.4c0 157.9 216.8 132.3 216.8 200.4 0 26.4-22.9 34.9-54.7 34.9-47.2 0-108.2-19.5-156.1-45.5v128.5a396.09 396.09 0 0 0 156 32.4c118.6 0 200.3-51 200.3-153.6 0-170.2-218-139.7-218-203.9z" />
                </svg>
              </div>
              <div>
                <svg
                  className="ups"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M103.2 303c-5.2 3.6-32.6 13.1-32.6-19V180H37.9v102.6c0 74.9 80.2 51.1 97.9 39V180h-32.6zM4 74.82v220.9c0 103.7 74.9 135.2 187.7 184.1 112.4-48.9 187.7-80.2 187.7-184.1V74.82c-116.3-61.6-281.8-49.6-375.4 0zm358.1 220.9c0 86.6-53.2 113.6-170.4 165.3-117.5-51.8-170.5-78.7-170.5-165.3v-126.4c102.3-93.8 231.6-100 340.9-89.8zm-209.6-107.4v212.8h32.7v-68.7c24.4 7.3 71.7-2.6 71.7-78.5 0-97.4-80.7-80.92-104.4-65.6zm32.7 117.3v-100.3c8.4-4.2 38.4-12.7 38.4 49.3 0 67.9-36.4 51.8-38.4 51zm79.1-86.4c.1 47.3 51.6 42.5 52.2 70.4.6 23.5-30.4 23-50.8 4.9v30.1c36.2 21.5 81.9 8.1 83.2-33.5 1.7-51.5-54.1-46.6-53.4-73.2.6-20.3 30.6-20.5 48.5-2.2v-28.4c-28.5-22-79.9-9.2-79.7 31.9z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us">
          <div className="first-half-home">
            <img className="lady-in-blue" src={aboutPortrait} alt="" />
          </div>
          <div className="second-half-home">
            <h1 className="about-title">About Us</h1>
            <p className="about-statement">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
       
      </div>
    </>
  );
}

export default Home;
