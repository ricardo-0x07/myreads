import React from 'react';
import {Link} from 'react-router-dom';
import lodash from 'lodash';
import { connect } from 'react-redux';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import { booksFetch, bookUpdated } from '../actions';

class MyReads extends React.Component {

    
    componentWillMount() {
        this.props.booksFetch();
    }
    updateReads = (update) => {
        this.props.bookUpdated(update)
    }
    

    render() {
        console.log('this', this);
        const { read, currentlyReading, wantToRead, bookUpdated } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading bookUpdated={bookUpdated} currentlyReading={currentlyReading}/>
                        <WantToRead bookUpdated={bookUpdated} wantToRead={wantToRead}/>
                        <Read bookUpdated={this.updateReads} read={read}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    const read = lodash.filter(state.books, book => book.shelf === 'read')
    const wantToRead = lodash.filter(state.books, book => book.shelf === 'wantToRead')
    const currentlyReading = lodash.filter(state.books, book => book.shelf === 'currentlyReading')

    return {
        read,
        wantToRead,
        currentlyReading
    };
}

export default connect(mapStateToProps, {
    booksFetch,
    bookUpdated
})(MyReads);
