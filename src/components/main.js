import React, {Component} from 'react';
import {searchByAuthor, searchByQuote, searchByBook} from '../actions/fetch-action';
import Quote from './quotes'
import {connect} from 'react-redux';


class Main extends Component {


    searchBy() {
        switch (this.refs.searchOption.value) {
            case 'author':
                this.props.searchByAuthor(this.refs.search.value);
                break;
            case 'book':
                this.props.searchByBook(this.refs.search.value);
                break;
            case 'quote':
                this.props.searchByQuote(this.refs.search.value);
                break;
        }
    }

    quotesBy(arr) {
        switch (this.refs.searchOption.value) {
            case 'author':
                var author = arr[0].author;
                return <h4>Quotes by {author} </h4>;
                break;
            case 'book':
                var book = arr[0].book;
                return <h4>Quotes by {book}</h4>;
                break;
            case 'quote':
                return <h4>Quotes</h4>;
                break;
        }

    }


    render() {
        console.log(this.props.fetchResponse)
        let data = [];
        var searchOption = <select ref="searchOption">
            <option value="quote">Quote</option>
            <option value="author">Author</option>
            <option value="book">Book</option>
        </select>;

        if (this.props.fetchResponse.isFetched) {
            data = this.props.fetchResponse.data;
        }


        return (
            <div id="search-container">
                <div id="search">
                    <h3>Search by: </h3>
                    {searchOption}
                    <input ref="search" type="text" placeholder="search quotes here"/>
                    <button onClick={this.searchBy.bind(this)}>Search</button>
                </div>
                <h4>Search results:</h4>

                <div id="quote-list">
                    {data == undefined ?
                    <p><i>No Results</i></p> :
                        data.map((quote, index) => {
                            return <Quote key={index} quote={quote}/>
                        })}

                </div>

            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {fetchResponse: state.fetchReducer}
}

export default connect(mapStatetoProps, {searchByAuthor, searchByQuote, searchByBook})(Main)

