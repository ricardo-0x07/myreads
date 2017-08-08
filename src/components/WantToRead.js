import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Book from './Book';

class WantToRead extends React.Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.wantToRead.map((book) => (
                            <li key={book.id}>
                                <Book bookUpdated={this.props.bookUpdated} book={book}/>
                            </li>))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default WantToRead;
