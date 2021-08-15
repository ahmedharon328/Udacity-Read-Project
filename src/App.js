import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Components/BookShelf'
import SearchBar from './Components/SearchBar'

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
        </Switch>
        </div>
    </Router>
  )
}
export default App
