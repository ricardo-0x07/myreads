import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Book from './Book';

class CurrentlyReading extends React.Component {

    render() {
        console.log('this', this);
        return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.currentlyReading.map((book) => (
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
