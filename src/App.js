import About from "./components/About";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import Showproducts from "./components/Showproducts";
import ContextProvider from "./store/Contextprovider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Showproducts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
