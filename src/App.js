import { useContext } from "react";
import About from "./components/About";
import AuthForm from "./components/AuthForm";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import NotFound from "./components/NotFound";
import Productdetail from "./components/Productdetail";
import Showproducts from "./components/Showproducts";
import ContextProvider from "./store/Contextprovider";
import { Route, Switch } from "react-router-dom";
import CreateContext from "./store/create-context";
function App() {
  function checkLocalStorage() {
    let item = localStorage.getItem("item");
    if (!item) {
      return null;
    }
    const now = new Date();
    item = JSON.parse(item);
    if (now.getTime() > item.expire) {
      localStorage.removeItem("item");
      return null;
    } else {
      return item.token;
    }
  }
  const expiredTime = checkLocalStorage();

  return (
    <ContextProvider>
      <MyNavbar />
      <Switch>
        <Route path="/" exact>
          {expiredTime ? <Home /> : <AuthForm />}
        </Route>

        {expiredTime ? (
          <>
            <Route path="/store" exact>
              <Showproducts />
            </Route>
            <Route path="/store/:storeid" exact>
              <Productdetail />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </>
        ) : (
          <Route path="/auth" exact>
            <AuthForm />
          </Route>
        )}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
