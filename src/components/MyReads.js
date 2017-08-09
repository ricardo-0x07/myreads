import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';
import Shelf from './Shelf';
import { booksFetch, bookUpdated } from '../actions';

class MyReads extends React.Component {

    static propTypes = {
        read: PropTypes.array.isRequired,
        wantToRead: PropTypes.array.isRequired,
        currentlyReading: PropTypes.array.isRequired,
        booksFetch: PropTypes.func.isRequired,
        bookUpdated: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.booksFetch();
    }

    render() {
        const { read, currentlyReading, wantToRead } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf bookUpdated={this.props.bookUpdated} books={currentlyReading} name={'Currently Reading'}/>
                        <Shelf bookUpdated={this.props.bookUpdated} books={wantToRead} name={'Want To Read'}/>
                        <Shelf bookUpdated={this.props.bookUpdated} books={read} name={'Read'}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const read = state.books.filter(book => book.shelf === 'read');
    const wantToRead = state.books.filter(book => book.shelf === 'wantToRead');
    const currentlyReading = state.books.filter(book => book.shelf === 'currentlyReading');

    return {
        read,
        wantToRead,
        currentlyReading
    };
};

export default connect(mapStateToProps, {
    booksFetch,
    bookUpdated
})(MyReads);
