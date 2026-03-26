import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout><Home/></MainLayout>} />
      <Route path="/cart" element={<MainLayout><Cart/></MainLayout>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
