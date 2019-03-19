import React from 'react'
//import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
import Home from './Views/Home'
import Search from './Views/Search'
import Provider, {MyContext} from './Provider/'
import './App.css'


// top-kevel class component that renders any
// of the child component based on path/URL

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route exact path={"/"} 
              render = {() => (
                <MyContext.Consumer>
                  {context => <Home {...context } />}
                </MyContext.Consumer>  
              )}
            />
            <Route exact path={"/search"} 
              render = {() => (
                <MyContext.Consumer>
                  {context => <Search {...context } />}
                </MyContext.Consumer>  
              )}
            />
          </Switch>
        </Provider>
     
      </div>
    )            
  }
}

export default BooksApp
