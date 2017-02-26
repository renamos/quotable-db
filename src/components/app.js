import React, {Component} from 'react';
import Nav from './nav'
import Header from './header';

import Footer from './footer'


export default class App extends Component {

    render() {

        return (
            <div id="content">
                <main>
                    <Nav/>
                    <Header/>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}


