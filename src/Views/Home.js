import React from 'react';
import Shelf from '../Components/Shelf'
import Fab from '../Components/Fab'
import {getAll} from '../BooksAPI'

class Home extends React.Component {
  async componentDidMount() {
    try {
      const books = await getAll();
        this.props.addBooks(books);
    } catch(error) {
      console.log(error)
    }
  }
  render() {
    return (
    	 <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf 
                title="Currently Reading" 
                books={this.props.currentlyReading} 
                updateShelf={this.props.updateShelf} />
              <Shelf 
                title="Want to Read" 
                books={this.props.wantToRead} 
                updateShelf={this.props.updateShelf} />
              <Shelf 
                title="Read" 
                books={this.props.read}
                updateShelf={this.props.updateShelf} />
            </div>
            <Fab/>
          </div>
      )
  }
}

export default Home