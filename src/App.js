import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from './firebase/utils';
import './App.css';

import Navbar from './components/Navbar';

import Default from './components/Default';
import Cart from './components/Cart';
import Login from './components/Login';
import About from './components/About';
import ProductList from './components/ProductList';


const initialState = {
  currentUser: null
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;



  return (
    <>
    <Navbar currentUser= {currentUser}/>
    <div className="App">
    <Switch>
    <Route exact path="/" component={ProductList} />
          <Route path="/about" component={About} />
          <Route path="/login"  render={() => currentUser ? <Redirect to="/" /> : (
                <Login />
            )} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />

    </Switch>
   
    </div>
    
    
    </>
   );
  }
}

export default App;
