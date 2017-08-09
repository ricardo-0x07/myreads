import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        bookUpdated: PropTypes.func.isRequired
    }

    selectShelf = (event) => {
        this
            .props
            .bookUpdated({book: this.props.book, shelf: event.target.value});
    }
    render() {
        const {title, authors, imageLinks, shelf} = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLinks
                            ? imageLinks.thumbnail
                            : ''})`
                        }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf || 'none'} onChange={this.selectShelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors
                        ? authors[0]
                        : ''}</div>
            </div>
        );
    }
}

export default Book;
