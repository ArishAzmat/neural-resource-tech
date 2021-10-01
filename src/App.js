import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Banner from "./components/Banner";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
<<<<<<< HEAD
import $ from 'jquery';
import ContactUs from "./pages/ContactUs";


$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
  } else {
    $("#site-header").removeClass("nav-fixed");
  }
});

=======
import  Services from "./pages/services";
>>>>>>> 9deb588661b5ea8afa84752535ff3e466a1ea82d

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <Banner />
          </Route>
          <Route path='/aboutus' >
            <About />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
