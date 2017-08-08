import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Book from './Book';

class Read extends React.Component {

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
