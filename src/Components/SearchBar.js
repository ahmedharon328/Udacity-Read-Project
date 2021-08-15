import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import BookSearch from './BookSearch'
import * as BooksAPI from "../BooksAPI"

class SearchBar extends Component{
    state={
        books:[],
        query:'',
        searchBooks:[]
    }
    componentDidMount(){
        BooksAPI.getAll().then(data => this.setState({
            books:data
        }))
    };

    handleClick=(query)=>{ 
            this.setState({
                query:query
            })
        if(query){
            BooksAPI.search(query).then( result =>{
                if(result.error || result === undefined){
                    this.setState({searchBooks:[]})
                    return result
                }
                const myBooks = result.map(res =>{
                    this.state.books.forEach(book =>{
                        if(res.id === book.id){
                            res.shelf = book.shelf
                        }
                        if (res.shelf === undefined){
                            res.shelf = 'none'
                        }
                    })  
                    // console.log(res.shelf)
                    return res 
                })

                this.setState({
                    searchBooks:myBooks
                })     
             })
            .catch(err => console.log('Errrr',err))
        }else{
            if(query === ''){
                this.setState({searchBooks:[]})
            }
        }
    }
 

    render(){

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                placeholder="Search By Author or Title"
                value={this.state.query}
                onChange={(e)=> {this.handleClick(e.target.value)}}
                />
              </div>
              
            </div>
            <BookSearch searchBooks = {this.state.searchBooks} query={this.state.query}/>
            </div>
        )
    }
}

export default SearchBar