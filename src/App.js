import { Switch, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Home from './components/pages/home'
import Cart from './components/pages/cart'
import Inventory from './components/pages/inventory'
import History from './components/pages/history'
import Auth from "./components/pages/auth/auth"


function App() {

  const [userAuth, setUserAuth] = useState(false)

  useEffect(() => {
    let token = Cookies.get('AuthToken')

    if (token) {
      setUserAuth(true)
    }

    console.log("token", token)
  }, [])


  return (
    <div className="">
      <Switch>
        {
          userAuth ? <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/history" component={History} />
          </React.Fragment>
            : <React.Fragment>
              <Route exact path="/" component={Auth} />
            </React.Fragment>
        }
      </Switch>

    </div>
  );
}

export default App;
