import React from 'react';

const CartWidget = () => {
  const cartCount = 3; // contador

  return (
    <div className="cart-widget position-relative">
      <i className="bi bi-cart3" style={{ fontSize: 32 }}></i>
      {cartCount > 0 && (
        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
