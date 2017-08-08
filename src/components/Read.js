import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Book from './Book';

class Read extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                        {this.props.read.map((book) => (
                            <li key={book.id}>
                                <Book bookUpdated={this.props.bookUpdated} book={book}/>
                            </li>))}
                </ol>
                </div>
            </div>
        );
    }
}

export default Read;
