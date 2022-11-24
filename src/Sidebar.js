import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src='https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg' title='Julia Antczak' />
        <SidebarRow 
            Icon={LocalHospital}
            title='COVID-19 Information Center' />

        <SidebarRow Icon={EmojiFlags} title='Pages' />
        <SidebarRow Icon={People} title='Friends' />
        <SidebarRow Icon={Chat} title='Messenger' />
        <SidebarRow Icon={Storefront} title='Marketplace' />
        <SidebarRow Icon={VideoLibrary} title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlined} title='More' />
    </div>
  )
}

export default Sidebar