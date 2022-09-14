import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => {
        return (<div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>{topic}</p>
                </div>)
    }

    return (
        <div className='sidebar'>

            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt='background' />
                <Avatar className='sidebar__avatar'/>
                <h2>Atharva Mahamuni</h2>
                <h4>Software Development Engineer</h4>
            </div>
            
            <div className="sidebar__stats">
                
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,234</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4,321</p>
                </div>
            </div>
            
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('webdev')}
                {recentItem('fullstack')}
                {recentItem('nodejs')}
                {recentItem('frontend')}
                {recentItem('backend')}
            </div>
        </div>
    )
}

export default Sidebar