import React, {Component} from 'react';
import {createQuote} from '../actions/fetch-action';
import {connect} from 'react-redux';

class AddQuote extends Component {

    addQuote() {
        setTimeout(function () {

            if(!this.refs.quote.value || !this.refs.author.value || !this.refs.book.value){
                alert('Please fill out all fields.')
                return
            }

            var data =
                {
                    quote: this.refs.quote.value,
                    author: this.refs.author.value,
                    book: this.refs.book.value,
                };
            this.setState({sending: true});
            this.props.createQuote(data);
        }.bind(this), 300)
    }



    render() {
        let fetchData = [];
        if(this.props.fetchResponse){
            fetchData = this.props.fetchResponse
        }
        if(this.props.fetchResponse.isFetched){
            this.refs.book.value = "";
            this.refs.quote.value = "";
            this.refs.author.value = "";

        }
        return (
            <div id="add-quote-container">
            <div id="add-quote">
            <label>QUOTE</label>
                <textarea ref="quote" placeholder="enter quote here"></textarea>
                <label>AUTHOR</label>
                <input ref="author" type="text" placeholder="enter author here"/>
                <label>SOURCE</label>
                <input ref="book" type="text" placeholder="enter source here"/>
                <button onClick={this.addQuote.bind(this)}>submit</button>
            </div>
                {fetchData.isSending ? <p>Sending...</p>
                    : fetchData.isFetched ? <p>Success!</p> :  <p> - </p>}
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {fetchResponse: state.fetchReducer}
}

export default connect(mapStatetoProps, {createQuote})(AddQuote)


