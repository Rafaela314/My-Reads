import React from 'react';
import {handleChange}  from './Book';


class Changer extends React.Component {
 

  render() {
    
    return(
      <div className="book-shelf-changer">
        <select onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      
    );
  }
}

export default Changer