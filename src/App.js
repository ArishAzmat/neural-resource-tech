import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Banner from "./components/Banner";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import  Services from "./pages/services";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path = '/' exact>
          <Banner />
          </Route>
          <Route path = '/aboutus' >
          <About />
          </Route>
          <Route path = '/services'>
          <Services />
          </Route>
          <Route path = '/contactus'>
          <Banner />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
