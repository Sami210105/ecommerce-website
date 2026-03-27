import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout><Home/></MainLayout>} />
      <Route path="/cart" element={<MainLayout><Cart/></MainLayout>} />
      <Route path="/checkout" element={<MainLayout><Checkout/></MainLayout>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
