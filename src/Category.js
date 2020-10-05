import React, { Component } from 'react'
import { categoryMapper } from './helpers';

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
            <div>
                {categoryMapper().map(category => (
                    <button name={category.number} onClick={this.selectCategory} key={category.number}>{category.name}</button>
                ))}
            </div>
        )
    }
}
