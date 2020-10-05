import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Landing extends Component {
    render () {
        return (
            <div>
                <h1>Landing Page</h1>
                <Link to='/category'>

                    <button >Choose category</button>
                </Link>
            </div>
        )
    }
}
