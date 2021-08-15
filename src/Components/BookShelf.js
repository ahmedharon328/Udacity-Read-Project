import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import Shelfs from './Shelfes'
import * as BookAPI from "../BooksAPI";

class BookShelf extends Component{
  state = {
    books:[]
}

componentDidMount(){
    BookAPI.getAll().then(data => this.setState({
        books:data
    }))
};


handleChange = (book,shelf) =>{
  BookAPI.update(book, shelf)
    .then(
      this.setState({
        books:this.state.books.map(item => {
          if ( item.id === book.id) {
            item.shelf = shelf
            return item
          } else{
            return item
          }
        })
      })
    )
}


    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <Shelfs Allbooks = {this.state.books} change ={this.handleChange}/>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default BookShelf