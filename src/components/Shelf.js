import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Book from './Book';

class CurrentlyReading extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        bookUpdated: PropTypes.func.isRequired
    }

    render() {
        return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.name}</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book bookUpdated={this.props.bookUpdated} book={book}/>
                            </li>))}
                    </ol>
                    </div>
                </div>
        );
    }
}

export default CurrentlyReading;
