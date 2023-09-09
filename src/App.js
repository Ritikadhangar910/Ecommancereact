import MyNavbar from "./components/MyNavbar";
import Showproducts from "./components/Showproducts";
import ContextProvider from "./store/Contextprovider";

function App() {
  return (
    <ContextProvider>
      <MyNavbar />
      <Showproducts />
    </ContextProvider>
  );
}

export default App;
