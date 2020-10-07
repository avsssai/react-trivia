import React, { Component } from 'react'
import { categoryMapper } from './helpers';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import './Category.css';
import { CssBaseline, Typography } from '@material-ui/core';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.selectCategory = this.selectCategory.bind(this);
    }
    selectCategory (e) {
        this.props.selectCategory(e.target.name);
    }
    render () {
        return (
            <div className="category-page">
                <Navbar />
                <CssBaseline />
                <Typography variant="h3" className="category-heading">Choose Category!</Typography>
                <section className="category-wrapper">

                    {categoryMapper().map(category => (
                        <Button variant="outlined" name={category.number} onClick={this.selectCategory} key={category.number}>{category.name}</Button>
                    ))}
                </section>
            </div>
        )
    }
}
