import './Header.css'
import { Link } from 'react-router-dom';
import hamburger from '../Images/Misc/hamburger.png'
import { useState } from 'react';




function Header() {
  const [navDown, setNav] = useState('false');



  const hamburgerOp = () => {
      setNav(!navDown);
      console.log(navDown);
  }

  const closeNaveBar = () => {
    console.log("hello")
  }

  return (
    <>
      <div>
        <nav className="nav-bar">
          <div className="logo">
            <Link to="/">
              <h1>Fashion</h1>
            </Link>
          </div>
          <div className="main-options">
            <Link to="/">Home</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="inventory">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </div>
            <div>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
              </Link>
            </div>
            <Link to="/cart">$0.00</Link>
          </div>
          <div className="responsive-options">
            <div className="options-buttons">
              <img  onClick={hamburgerOp} src={hamburger} />
            </div>
          </div>
        </nav>
       {navDown ? (

        <nav >
          <div  >
            <ul onClick={hamburgerOp} className="responsive-menue">
              <Link to="/">
                <li className="re-menue">Home</li>
              </Link>
              <Link to="/men">
                <li className="re-menue">Men</li>
              </Link>
              <Link to="/women">
                <li className="re-menue">Women</li>
              </Link>
              <Link to="/contact">
                <li className="re-menue">Contact</li>
              </Link>
              <Link to="/cart">
                <li className='re-menue'>Cart</li>
              </Link>
            </ul>
          </div>
        </nav>
       ) : (
         <></>
       )}
      </div>
    </>
  );
}

export default Header;
