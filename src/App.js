import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/usersList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
    return (
        <>

            <Router>
                <Topbar/>
                <div className="container">
                    <Sidebar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/users" exact component={UserList}/>
                        <Route path="/user/:userId" exact component={User}/>
                        <Route path="/newUser" exact component={NewUser}/>
                        <Route path="/products" exact component={ProductList}/>
                        <Route path="/product/:productId" exact component={Product}/>
                        <Route path="/newProduct" exact component={NewProduct}/>
                    </Switch>
                </div>
            </Router>

        </>
    );
}

export default App;
