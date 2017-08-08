import React from 'react';
import {Link} from 'react-router-dom';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import { booksSearch, queryUpdate, bookUpdated } from '../actions';
import Book from './Book';

class Search extends React.Component {
    static propTypes = {
        search: PropTypes.array.isRequired
    }

    state = {
        /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
        // showSearchPage: false
    }
    updateReads = (update) => {
        this.props.bookUpdated(update)
    }
    updateQuery = (event) => {
        let value =  event.target.value;
        this.props.queryUpdate({prop: 'query', value})
        this.props.booksSearch({query: value, max: 3})
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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

const mapStateToProps = (state, ownProps) => {
    console.log('state.search', state.search);
    const { books, search } = state;
    // const { query, search } = search;
    console.log('query', search.query);
    console.log('search', search);
    // const read = lodash.filter(state.books, book => book.shelf === 'read')
    // const wantToRead = lodash.filter(state.books, book => book.shelf === 'wantToRead')
    // const currentlyReading = lodash.filter(state.books, book => book.shelf === 'currentlyReading')

    return {
        query: search.query,
        search: search.search
    };
}

export default connect(mapStateToProps, {
    booksSearch,
    queryUpdate,
    bookUpdated
    })(Search);
