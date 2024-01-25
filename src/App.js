import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { ShopContextProvider } from "./context/shopContext";
import Welcome from "./components/welcome";
import RoutesMap from "./routes";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/FooterSection/Footer";
import store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ShopContextProvider>
        <Router>
          <Header />
          <Welcome />
          <RoutesMap />
          <Footer />
        </Router>
      </ShopContextProvider>
      </Provider>
    </div>
  );
}

export default App;
