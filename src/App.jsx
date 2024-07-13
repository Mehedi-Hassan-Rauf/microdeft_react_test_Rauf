import "./App.css";
import Create from "./components/Create";
import Product from "./components/Product";
function App() {
  return (
    <div className=" max-w-screen bg-slate-500 flex flex-col">
      <Create />
      <Product />
    </div>
  );
}

export default App;
