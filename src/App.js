import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Components/BookShelf'
import SearchBar from './Components/SearchBar'
import Page404 from './Components/Page404'

const App = ()=>{
  return(
    <Router>
        <div className="app">
        <Switch>
          <Route exact path='/'>
          <BookShelf />
          </Route>
          <Route path='/search'>
          <SearchBar />
          </Route>
          <Route>
            <Page404 path='*'/>
          </Route>
        </Switch>
        </div>
    </Router>
  )
}
export default App
