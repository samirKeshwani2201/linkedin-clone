import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from './HeaderOption';
import { useDispatch } from "react-redux"
import { logout} from './features/userSlice';
import { auth } from './firebase';
// useSelector
// selectUser 


function Header() {
    // const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    };

    return (
        // 
        <div className="header">
            <div className="header__left">
                <img
                    // linkedin  logo https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/home-logo.svg

                    // https://cdn-icons-png.flaticon.com/512/174/174857.png
                    src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/home-logo.svg"
                    alt="Linkedin Logo"
                />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} onCLick={logoutOfApp}
                    title='me' />
            </div>
        </div>

    );
};


export default Header