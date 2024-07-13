import "./App.css";
import Create from "./components/Create";
import Product from "./components/Product";
function App() {
  return (
    <div className=" max-w-screen bg-slate-500 flex flex-col gap">
      <Create />
      <div className="w-full grid grid-cols-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
