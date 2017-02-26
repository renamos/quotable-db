import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router';


class Nav extends Component {

    render() {
        return (
            <Menu right>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="add" className="menu-item" href="/add-quote">Add Quote</a>
                    <a id="add" className="menu-item" href="/search">Search</a>
            </Menu>
        );
    }
}


export default Nav