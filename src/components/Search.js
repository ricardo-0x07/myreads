import React from 'react';
import {Link} from 'react-router-dom';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';
import { booksSearch, queryUpdate, bookUpdated, booksFetch } from '../actions';
import Book from './Book';

class Search extends React.Component {
    static propTypes = {
        search: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
        booksSearch: PropTypes.func.isRequired,
        bookUpdated: PropTypes.func.isRequired,
        booksFetch: PropTypes.func.isRequired,
        queryUpdate: PropTypes.func.isRequired
    }

    updateReads = (update) => {
        this.props.bookUpdated(update)
    }
    clearQuery = () => {
        this.props.queryUpdate({prop: 'query', value: ''});
        this.props.booksSearch({query: '', max: 3});
    }
    updateQuery = (event) => {
        let value =  event.target.value;
        this.props.queryUpdate({prop: 'query', value});
        this.props.booksSearch({query: value, max: 3});
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" onClick={this.clearQuery}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.props.query} onChange={this.updateQuery} placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.search.map((book) => (
                            <li key={book.id}>
                                <Book bookUpdated={this.updateReads} book={book}/>
                            </li>))}
                    </ol>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { books, search } = state;
    let tempSearch = search.search;
    books.forEach(book => {
        let index = lodash.findIndex(tempSearch, item => item.id === book.id);
        if(index !== -1) {
            tempSearch = tempSearch.filter(item => item.id !== book.id);
            tempSearch = [...tempSearch, book];
        }
    });
    return {
        query: search.query,
        search: tempSearch
    };
};

export default connect(mapStateToProps, {
    booksSearch,
    queryUpdate,
    bookUpdated,
    booksFetch
})(Search);
