import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { CartProductContext } from "../context/CartContext";
import Header from "../components/Header";
function App() {
 const {isModalOpen} = CartProductContext();
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header/>

      <main className="flex-grow p-6">
        <ProductList />
      </main>

      {isModalOpen && (
        <Cart
          
        />
      )}
    </div>
  );
}

export default App;
