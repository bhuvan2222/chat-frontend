import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__header">

<Avatar src="" />


         
            
            </div>  
<div className="sidebar__search">
   
    <div className="sidebar__searchContainer">
    <SearchOutlined />
    <input type="text" placeholder="search or start new chat" />
    </div>
</div>

<div className="sidebar__chats">

<SidebarChat/>
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>


</div>





        </div>
    )
}

export default Sidebar;
