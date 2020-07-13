import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component';


class DirectoryMenu extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { sections } = this.props;
        return (
            <div className="directory-menu">
                {sections.map(item => 
                    <MenuItem key={item.id} item={item}/>
                )}
            </div>
        );
    }
}

export default DirectoryMenu;

