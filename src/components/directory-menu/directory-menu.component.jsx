import React from 'react';
import MenuItem from '../menu-item/menu-item.component';


const DirectoryMenu = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(item => (
            <MenuItem key={item.id} title={item.title}/>
        ))}
    </div>
);

export default DirectoryMenu;