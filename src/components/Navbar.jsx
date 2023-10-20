import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import logo from '../assets/img/logo.png';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
    <nav className="flex justify-start  py-2 px-6 bg-slate-100 items-center m-w-full relative w-full">
        <div className="flex justify-start items-center basis-1/4">
            {/* <img src={logo} alt="logo" className="w-6 h-6 mr-1"/> */}
            <p className='mr-3 uppercase'><strong className=''>unbxd</strong>search</p>
            <div className='flex border-2 border-slate-300 justify-center content-center  rounded-md'>
                <MenuIcon style={{ color: "gray" }} className="p-1"/>
                <p className='font-light text-xs self-center ml-1 tracking-wider rounded-md truncate'>prad-raenebeauty-eng .Eng</p>
            </div>
        </div>
        <div className='flex justify-between basis-3/4'>
            <div className="flex justify-center items-center">
                <ul className="flex justify-between items-center gap-x-4">
                    <li 
                    // className='border-2 h-11 border-slate-300 border-b-0 p-2 rounded-md bg-white relative'
                    >
                        <NavLink to='/overview' className={(navData) => navData.isActive ? 'text-blue-500 border-2 h-11 border-slate-300 border-b-0 p-2 rounded-md bg-white' : 'text-black'}>overview</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center">
                        <button className='uppercase text-xs block font-bold tracking-wider p-2 text-slate-800'
                        onClick={handleClick}
                        >
                            merchandise
                            <ArrowDropDownIcon className="text-slate-400 self-start"/>
                        </button>
                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={handleClose} className="capitalize" component={Link} to="/merchandising">Commercial Search</MenuItem>
                        <MenuItem onClick={handleClose} className="capitalize" component={Link} to="/typehead">Typehead</MenuItem>
                        </Menu>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/algorithms'>algorithms</NavLink>
                    </li>
                    <li>
                    <NavLink to='/reports'>reports</NavLink>
                    </li>
                    <li>
                    <NavLink to='/manage'>manage</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div>
                    <p className='uppercase text-xs border-2 border-slate-300 px-4 py-1 bg-white  rounded-md font-medium tracking-wider blue'>website preview</p>
                </div>
                <div className='flex'>
                    <IconButton>
                        <PersonIcon className='text-slate-400'/>
                        <ArrowDropDownIcon className='text-slate-400'/>
                    </IconButton>
                </div>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
