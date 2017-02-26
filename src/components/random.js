import React, {Component} from 'react';
import {getRandomQuote} from '../actions/fetch-action'
import {connect} from 'react-redux';
import Loading from 'react-loading'


class Random extends Component {

    componentDidMount() {
        this.props.getRandomQuote();
    }

    newQuote() {
        console.log('you got a new quote.')
        this.props.getRandomQuote();
    }

    render() {

        if (this.props.fetchResponse.data) {
            let quote = this.props.fetchResponse.data.quote;
            let author = this.props.fetchResponse.data.author;
            let book = this.props.fetchResponse.data.book;
            return (<div>
                    <button id="quote-button" onClick={this.newQuote.bind(this)}>new quote</button>
                    <div className="random">
                        <div className="random-container">
                            <h1>"{quote}"</h1>
                            <p>-{author}, <i>{book}</i></p>
                        </div>
                    </div>
                </div>
            );
        }
        return (<div>
                <button id="quote-button" onClick={this.newQuote.bind(this)}>new quote</button>
                <div className="random">
                    <h3>loading...</h3>

                </div>
            </div>
        )
    }

}

function mapStatetoProps(state) {
    return {fetchResponse: state.fetchReducer}
}

export default connect(mapStatetoProps, {getRandomQuote})(Random)