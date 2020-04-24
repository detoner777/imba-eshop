import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import MyToast from "./components/MyToast";
import Oferta from "./pages/Oferta";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";

import "./fakebackend/axiosData";

import { loadState, saveState } from "./store/localStorage";
import throttle from "lodash/throttle";

const App = () => {
  const persistedState = loadState();
  // const initialState = {};

  const store = createStore(
    rootReducer,
    // initialState,
    persistedState,
    compose(
      applyMiddleware(thunk),
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
  );

  store.subscribe(
    throttle(() => {
      saveState({
        cartReducer: store.getState().cartReducer,
      });
      // console.log(store);
    }, 1000)
  );

  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/imba-eshop">
            <Redirect to="/imba-eshop/home" />
          </Route>
          <Route path="/imba-eshop/home" exact component={Home} />
          <Route path="/imba-eshop/products" exact component={Products} />
          <Route
            path="/imba-eshop/product-details/:id"
            exact
            component={ProductDetails}
          />
          <Route path="/imba-eshop/cart" exact component={Cart} />
          <Route path="/imba-eshop/error" exact component={Error} />
          <Route path="/imba-eshop/oferta" exact component={Oferta} />
          <Route path="/imba-eshop/delivery" exact component={Delivery} />
          <Route path="/imba-eshop/contacts" exact component={Contacts} />
        </Switch>
        <Footer />
        <MyToast />
      </Provider>
    </Router>
  );
};

export default App;
