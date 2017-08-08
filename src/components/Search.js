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
    const { books, search } = state;

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
