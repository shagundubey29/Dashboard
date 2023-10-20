import { useState, useEffect } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Warning from '../components/Warning';
import Chip from '@mui/material/Chip';
import QueryCards from '../components/QueryCards';

const Typehead = () => {
    const [tags, setTags] = useState(["imp", "implora"]);
    useEffect(() => {
        const data = window.localStorage.getItem('query_tags');
        if (data !== null){
            setTags(JSON.parse(data));
        }
    },[]);
    useEffect(() => {
        window.localStorage.setItem('query_tags', JSON.stringify(tags));
    },[tags]);
    const InputTag = () => {
        // const [tags, setTags] = useState(["imp", "implor"]);
        const handleAdd = (e) => {
            if (e.key === 'Enter') {
                const value = e.target.value;
                if (value.trim() === '') return;
                const valueArr = value.split(",");
                setTags([...tags, ...valueArr]);
                e.target.value = '';
            }
            return;
        };
        const handleDelete = (index) => {
            setTags(tags.filter((e, i) => i !== index));
        };
        return(
            <>
                <div className='flex border-b-2 border-slate-200 flex-wrap flex-row mt-4'>
                    {tags.map((tag, index) => {
                        return (
                            <Chip
                                key={index}
                                label={tag}
                                onDelete={() => handleDelete(index)}
                                className='m-2'
                                sx={{margin: "0.3rem", borderRadius: "0.5rem"}}
                            />
                        )
                    })}
                    <input type='text' className='outline-none w-auto' onKeyDown={handleAdd} placeholder="Type..." autoFocus/>
                </div>
            </>
        );
    }
    const [open, setOpen] = useState(false);
    const [list , setList] = useState([...tags]);
    useEffect(() => {
        const data = window.localStorage.getItem('query_tags_list')
        if (data !== null){
            setList(JSON.parse(data));
        };
    },[]);
    useEffect(() => {
        window.localStorage.setItem('query_tags_list', JSON.stringify(list));
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        // console.log(tags);
        setOpen(false);
    };
    const queryUpdate = () => {
        // console.log(tags);
        // console.log(list)
        setList([...tags]);
        setTags([...tags])
        setOpen(false);
    };
  return (
    <div className='bg-slate-100 min-h-[100vh]'>
        <div className='flex justify-between items-center shadow-sm border-b-2 bg-white'>
            <div className='ml-7'>
                <h3 className='text-lg capitalize tracking-wider text-slate-700 font-semibold  pt-2'><span className='italic blue '>query rules </span>/ 'Implora'-Campaigns</h3>
                <div className='flex justify-start items-center gap-1'>
                <ul className='flex justify-start items-center gap-1'>
                    {list.map((list, index) => {
                        return(
                            <li key={index} className='text-xs capitalize text-slate-500 font-semibold p-0'>{list}, </li>
                        );
                    })}
                </ul>
                <IconButton className='text-slate-400' onClick={handleOpen}>
                    <EditOutlinedIcon />
                </IconButton>
                <Dialog open={open} onClose={handleClose} sx={{"& .MuiDialog-container": {alignItems: "flex-start"}}} className="p-2" PaperProps={{sx:{width: "50%"}}}>
                    <DialogTitle className='text-slate-700 capitalize tracking-wider p-2 text-xs font-semibold' sx={{paddingTop: "2rem"}}>add similar search query</DialogTitle>
                    <DialogContent className='p-2'>
                        <DialogContentText>
                            Add similar search queries sepreated by commas.
                        </DialogContentText>
                        <InputTag />
                        <DialogActions className='p-2'>
                            <button className='block p-2 text-sm uppercase tracking-wider px-4 text-slate-500 border-2 border-slate-200 rounded-md  shadow-sm font-semibold mt-4' onClick={handleClose}>cancel</button>
                            <button className='block p-2 text-sm uppercase tracking-wider px-4 text-white bg-blue-400 border-2 mt-4 border-blue-400 rounded-md  shadow-sm font-semibold' onClick={queryUpdate}>update</button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
                </div>
            </div>
            <div className='mr-7 flex justify-center items-center'>
                <IconButton className='text-slate-400'>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton className='text-slate-400'>
                    <SortByAlphaIcon />
                </IconButton>
            </div>
        </div>
        <Warning />
        <div className='flex gap-x-3 mx-7 mt-5'>
            <QueryCards />          
        </div>
    </div>
  )
}

export default Typehead;