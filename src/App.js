import About from "./components/About";
import Contact from "./components/Contact";
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
