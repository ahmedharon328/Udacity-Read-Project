import { Component } from "react";
import AllShelfs from "./AllShelfs";


class Shelfes extends Component{
    render(){

      const data = this.props.Allbooks

      const currentReading = data.filter((book) =>(
        book.shelf === "currentlyReading"
      ))

      const wantToRead = data.filter(book => (
        book.shelf === "wantToRead"
      ))

      const read = data.filter(book => (
        book.shelf === "read"
      ))
        return(

            <div className="list-books-content">
              <AllShelfs shelves ={currentReading} title={"Current Reading"} handleChange = {this.props.change} />
              <AllShelfs shelves = {wantToRead} title={"Want To Read"} handleChange = {this.props.change}/>
              <AllShelfs shelves={read} title={"Read"} handleChange = {this.props.change}/>
            </div>
            
        )
    }
}

export default Shelfes