import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBookActionCreator(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) { 
    // Whatever is returned will show up as props
    // inside of BookList. Whenever state changes this will re-render.
    return {
        books: state.books
    };
}

// First argument of returned function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all reducers.
    return bindActionCreators({ selectBookActionCreator: selectBook}, dispatch);
}

// Connect functions as Props to BookList.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);