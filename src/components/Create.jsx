const Create = () => {
  return (
    <div className="w-full bg-slate-500 mx-10 p-3 text-center">
      <h1>Create a Product</h1>
      <form
        action=""
        method="post"
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <input
          type="text"
          placeholder="title"
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="number"
          placeholder="stock"
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="number"
          placeholder="price"
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="number"
          placeholder="discount"
          className=" w-1/2 rounded p-2 outline-none"
        />
        <input
          type="email"
          placeholder="email"
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
