import './Cart.css'
import girlWithGlasses from '../Images/girl-with-glasses.jpg'
import newBalanceShoes from '../Images/new-balance-shoes.jpg'
import blueJacket from '../Images/blue-jacket.jpg'

function Cart() {
  return (
    <>
    <main>
      <div className="left-cart">
        <div><h1 className="cart-title">Cart</h1></div>
        <div className="cart-categories">
          <div><p>Product</p></div>
          <div><p>Quantity</p></div>
          <div><p>Price</p></div>
        </div>
        <hr />
        <div>
          <div className="selected-products">
            <div className="product-name">
              <div className="images">
                <img
                  className="product-img"
                  src={girlWithGlasses}
                  alt=""
                />
              </div>
              <div className="product-title"><p>Product name</p></div>
            </div>
            <div className="quantity-sec">
              <div className="price-quantity">
                <p className="minus">-</p>
                <p>1</p>
                <p className="plus">+</p>
              </div>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                   Name <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                  Remove
                </p>
              </div>
            </div>
            <div className="price-number">
              <p>$</p>
              <p>2,500</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="selected-products">
            <div className="product-name">
              <div className="images">
                <img
                  className="product-img"
                  src={newBalanceShoes}
                  alt=""
                />
              </div>
              <div className="product-title"><p>Product name</p></div>
            </div>
            <div className="quantity-sec">
              <div className="price-quantity">
                <p className="minus">-</p>
                <p>1</p>
                <p className="plus">+</p>
              </div>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                   <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                  Remove
                </p>
              </div>
            </div>
            <div className="price-number">
              <p>$</p>
              <p>2,500</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="selected-products">
            <div className="product-name">
              <div className="images">
                <img
                  className="product-img"
                  src={blueJacket}
                  alt=""
                />
              </div>
              <div className="product-title"><p>Product name</p></div>
            </div>
            <div className="quantity-sec">
              <div className="price-quantity">
                <p className="minus">-</p>
                <p>1</p>
                <p className="plus">+</p>
              </div>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                  Remove
                </p>
              </div>
            </div>
            <div className="price-number">
              <p>$</p>
              <p>2,500</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-cart">
        <div className="subtotal-bar">
          <div><p className="subtotal-txt">Subtotal</p></div>
          <div className="cost-comb">
            <p>$</p>
            <p>2,500</p>
          </div>
        </div>
        <div className="discount-bar">
          <div><p className="discount-txt">Discount</p></div>
          <div className="cost-comb">
            <p>$</p>
            <p>0</p>
          </div>
        </div>
        <div className="grand-total-bar">
          <div><p className="grand-total-text">Grand Total</p></div>
          <div className="cost-comb-last">
            <p>$</p>
            <p>2,500.00</p>
          </div>
        </div>
        <hr className="total-hr" />
        <div className="button">
          <button className="checkout-button">Checkout now</button>
        </div>
      </div>
    </main>
    </>
  );
}

export default Cart;
