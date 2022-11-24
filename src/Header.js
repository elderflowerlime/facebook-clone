import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
            <div className="header__left">
                <img src='https://www.facebook.com/images/fb_icon_325x325.png' alt=''/>
                <div className="header__input">
                <SearchIcon/>
                <input placeholder='Search Facebook' type='text' />
              </div>
            </div>

            <div className="header__middle">
              <div className="header__option header__option--active">
                <HomeIcon fontSize='large' />
              </div>
              <div className="header__option">
                <FlagIcon fontSize='large' />
              </div>
              <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize='large' />
              </div>
              <div className="header__option">
                <StorefrontIcon fontSize='large' />
              </div>
              <div className="header__option">
                <SupervisedUserCircleIcon fontSize='large' />
              </div>

            </div>

            <div className="header__right">
              <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>

                </div>

              <IconButton>
                <AddIcon />
              </IconButton>

              <IconButton>
                <ForumIcon/>
              </IconButton>

              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>

              <IconButton>
                <ExpandMoreIcon />
              </IconButton>

       

              
            </div>
    </div>
  )
}

export default Header