import React from 'react';
import '../App.css';

class Book extends React.Component {
    selectShelf = (event) => {
        console.log('event.target.value', event.target.value);
        this.props.bookUpdated({book: this.props.book, shelf: event.target.value})
    }
    render() {
        console.log('book this', this);        
        const { title, authors, imageLinks, shelf } = this.props.book;
        // const { thumbnail } = imageLinks;
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${imageLinks ? imageLinks.thumbnail :''})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={this.selectShelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors ? authors[0]: ''}</div>
            </div>
        );
    }
}

export default Book;
