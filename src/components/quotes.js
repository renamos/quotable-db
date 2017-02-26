import React, {Component} from 'react';


export default class Quote extends Component {


    render() {
        return (
            <div className="quote">
                <h4>{this.props.quote.quote}</h4>
                <p>-{this.props.quote.author}, <i>{this.props.quote.book}</i></p>

            </div>
        );
    }
}
