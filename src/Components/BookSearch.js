import React, { Component } from 'react'
import * as BookAPI from '../BooksAPI'



class BookSearch extends Component {

    state={
        searchBooks:[]
    }


    handleChange = (book,shelf) =>{
        BookAPI.update(book, shelf)
          .then(
            this.setState({
                searchBooks:this.state.searchBooks.map(item => {
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

    render() {
      
        const searchBooks = this.props.searchBooks 
        const query = this.props.query
        const showBooks = query ===''? []: searchBooks.filter((book) => (
            book.title.toLowerCase().includes(query.toLowerCase())
        ))
   

        return (
            <div>
                <div className="search-books-results">
              <ol className="books-grid">
                {showBooks.map((book) =>(
                    <li key={book.id}>
                        <div className='book'>
                            <div className='book-top'>
                            <div className="book-cover" style={{ width: 128, height: 193,  backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`)}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(e)=>this.handleChange(book,e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
              </ol>
            </div>
            </div>
        )
    }
}

export default BookSearch
