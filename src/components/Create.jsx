import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState();
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://react-interview.1putym.easypanel.host/api/product", {
        title: title,
        stock: stock,
        price: price,
        discount: discount,
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      className="w-full bg-slate-500 mx
    -10 p-3 text-center"
    >
      <h1>Create a Product</h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="number"
          placeholder="stock"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="number"
          placeholder="discount"
          value={discount}
          onChange={(e) => {
            setDiscount(e.target.value);
          }}
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className=" w-1/2 rounded p-2 outline-none"
        />
        <button
          type="submit"
          className="bg-green-400 px-5 py-2 rounded font-semibold text-white hover:bg-green-900 duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
