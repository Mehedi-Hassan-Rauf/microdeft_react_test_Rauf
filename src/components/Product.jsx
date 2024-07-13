const Product = () => {
  return (
    <div className="product">
      <img src="" alt="" />
      <div className="innerProduct">
        <h2 className="title">title</h2>
        <div className="priceDiv">
          <h2 className="price">BDT 2200</h2>
          <h2 className="mrp">MRP 2600</h2>
          <h2 className="discount">(20% OFF)</h2>
        </div>
      </div>
      <button className="btn">Order Now</button>
    </div>
  );
};

export default Product;
