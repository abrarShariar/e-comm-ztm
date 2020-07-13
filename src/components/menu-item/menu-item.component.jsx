import React, { Component } from 'react';
import './menu-item.styles.scss';


class MenuItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <div
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }} 
                className={`${item.size} menu-item`} 
            >
                <div className="content">
                    <h1 className="title">{item.title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        )
    }
}

export default MenuItem;

