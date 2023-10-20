import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import TabletAndroidOutlinedIcon from '@mui/icons-material/TabletAndroidOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const QueryCards = () => {
  const [option, setOption] = useState(null);
    const open = Boolean(option);
    const handleClick = (event) => {
      setOption(event.currentTarget);
    };
    const handleClose = () => {
      setOption(null);
    };
  return (
    <>
      <div className="flex  flex-col justify-start gap-x-4 items-start border-2  h-30 w-[300px]  rounded-md shadow-md bg-white">
                <div className='flex justify-between items-center w-full p-2 px-4'>
                    <h4 className='text-m tracking-wider text-slate-700 font-semibold capitalize'>Implora</h4>
                    <p className='text-sm tracking-wider text-slate-700 capitalize font-semibold'><CircleIcon fontSize='xtra-small' className='text-red-500'/> expired</p>
                </div>
                <div className='flex flex-col justify-start items-start w-full p-2 px-4 pb-4'>
                    <p className='text-xs pb-1'>Jan 12, 2022 01:36 am - Jan 22, 2022 01:36 am</p>
                    <p className='text-xs pb-1'><span className='text-xs text-slate-600 font-semibold  capitalize'>time zone</span>: Etc/UTC (GMT-00:00)</p>
                    <p className='text-xs pb-1'><span className='text-xs text-slate-600 font-semibold capitalize'>owner</span>: Astrid</p>
                </div>
                <div className='w-full'>
                    <ul className='flex w-full justify-between border-y-2 border-slate-200'>
                        <li className='block border-r-2 border-slate-200 border-l-2'>
                        <Tooltip title="Desktop browser" arrow>
                            <DesktopWindowsOutlinedIcon className='text-slate-600'/>
                        </Tooltip>
                        </li>
                        <li className='block border-r-2 border-slate-200'>
                        <Tooltip title="Tablet" arrow>
                            <TabletAndroidOutlinedIcon className='text-slate-600'/>
                        </Tooltip>
                        </li>
                        <li className='block border-r-2 border-slate-200'>
                        <Tooltip title="Phone" arrow>
                            <PhoneIphoneOutlinedIcon className='text-slate-600'/>
                        </Tooltip>
                        </li>
                        <li className='block border-r-2 border-slate-200'>
                        <Tooltip title="Android app" arrow>
                            <AdbOutlinedIcon className='text-slate-600'/>
                        </Tooltip>
                        </li>
                        <li className='block border-r-2 border-slate-200'>
                        <Tooltip title="iOS" arrow>
                        <AppleIcon className='text-slate-600'/>
                        </Tooltip>
                        </li>
                        <li className='block border-r-2 border-slate-200'>
                        <Tooltip title="Windows app" arrow>
                        <WindowIcon className='text-slate-600'/>
                        </Tooltip>
                        </li>
                    </ul>
                </div>
                <div className='p-2 px-4 pt-3  w-full flex justify-between items-center'>
                    <button type='button' className='block p-2 text-xs capitalize tracking-tighter text-slate-500 border-2 border-slate-200 rounded-md  shadow-sm'>comming soon</button>
                    <Tooltip title="More Options" arrow>
                        <IconButton className='text-slate-400' onClick={handleClick}>
                            <MoreVertIcon className='text-slate-600'/>
                        </IconButton>
                    </Tooltip>
                        <Menu
                        id="basic-menu"
                        anchorEl={option}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={handleClose} className="capitalize">delete</MenuItem>
                        <MenuItem onClick={handleClose} className="capitalize">duplicate</MenuItem>
                        </Menu>
                </div>
            </div>
    </>
  )
}

export default QueryCards