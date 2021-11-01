import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { AuthProvider } from 'oidc-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';


const oidcConfig = {
  onSignIn: async (user) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
    sessionStorage.setItem("bearer_token",user.access_token)
  },
  authority: "http://localhost:8080/auth/realms/SpringBootKeycloak",
  clientId: "customer-reactjs-app",
  redirectUri: window.location.origin + "/"
};


function App() {
  return (
    <AuthProvider {...oidcConfig}>
    <div>
             <Router>
                   <HeaderComponent />
                    <div className="container">
                         <Switch> 
                            <Route path = "/" exact component = {ListCustomerComponent}></Route>
                            <Route path = "/customers" component = {ListCustomerComponent}></Route>
                            <Route path = "/add-customer/:id" component = {CreateCustomerComponent}></Route>
                            <Route path = "/view-customer/:id" component = {ViewCustomerComponent}></Route>
                              
                     </Switch>
                </div>
              <FooterComponent />
         </Router>
      </div>
    </AuthProvider>
  )
}

export default App;