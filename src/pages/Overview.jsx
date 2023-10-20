/* eslint-disable jsx-a11y/anchor-is-valid */
// import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import CachedIcon from '@mui/icons-material/Cached';

import RevenueChart from '../components/RevenueChart';
import Queryreport from '../components/Queryreport';
import OverviewWidget from '../components/OverviewWidget';
import { IconButton } from '@mui/material';
import Warning from '../components/Warning';
// import Banner from '../components/Banner';


const Overview = () => {
    return (
        <>
        {/* <Banner /> */}
        <div className='bg-slate-100 pb-7 min-h-[100vh]'>
            <div className='flex justify-between items-center shadow-md border-b-2 bg-white'>
                <div className='ml-7 bg-white '>
                    <h3 className='text-lg capitalize tracking-wider text-slate-700 font-semibold  p-2'>commerce search revenue<span className='text-xs text-slate-400'> (Past 2 weeks)</span></h3>
                    <div className='flex justify-start gap-2  items-center px-2 mb-3'>
                        <p className='text-slate-500 tracking-wider text-xs capitalize font-bold'>last indexing status</p>
                        <CheckBoxIcon  className='text-green-600' fontSize='small'/>
                        <p>indexed</p>
                        <IconButton>
                            <CachedIcon className='text-slate-400' fontSize='small'/>
                        </IconButton>
                    </div>
                </div>
                <div className='flex mr-7'>
                    <div className='m-2 pr-4 border-r-2 border-slate-300'>
                    <p className='text-slate-400 capitalize tracking-wider font-semibold text-xs mb-1'>total no. of Products</p>
                            <span className='text-slate-900 font-bold'>3,503</span>
                    </div>
                    <div className='m-2 pl-4'>
                    <p className='text-slate-400 capitalize tracking-wider font-semibold text-xs mb-1'>Last Catalog Upload</p>
                            <span className='text-slate-900 font-bold'>07 Oct 2022</span>
                    </div>
                </div>
            </div>
            <Warning />
            <div className='flex gap-x-3 mx-7 mt-5'>
                <OverviewWidget type={"search visit"}/>
                <OverviewWidget type={"search queries"}/>
                <OverviewWidget type={"product views"}/>
                <OverviewWidget type={"add to cart"}/>
                <OverviewWidget type={"units sold"}/>
            </div>
            <div className='flex mt-5 mx-7 shadow-md border-2 rounded bg-white'>
                <div className='p-1 basis-3/4 mb-4'>
                    <h4 className='text-lg capitalize tracking-wider text-slate-700 font-semibold pl-5 pb-5 p-2'>commerce search revenue<span className='text-xs text-slate-400'> (Past 2 weeks)</span></h4>
                    {/* <h5 className='text-xs text-slate-600  font-bold'>Revenue</h5> */}
                    <RevenueChart/>
                </div>
                <div className='p-1 flex flex-col items-center justify-center basis-1/4'>
                    <div className='flex justify-between items-center w-[250px] border-b-2 border-slate-300 p-3'>
                        <div className='p-1 mb-3'>
                            <p className='text-slate-400 capitalize tracking-wider font-semibold text-xs mb-1'>total revenue</p>
                            <span className='text-slate-900 font-bold'>{`$ >1,000,000,000`}</span>
                        </div>
                        <div>
                            <BarChartIcon className='text-blue-100' style={{width: "50px", height: "50px"}}/>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-[250px] border-b-2  border-slate-300 p-3'>
                        <div className='p-1 mb-3'>
                            <p className='text-slate-400 capitalize tracking-wider font-semibold text-xs mb-1'>per search visit</p>
                            <span className='text-slate-900 font-bold'>$ 44.00</span>
                        </div>
                        <div>
                            <BarChartIcon className='text-blue-100' style={{width: "50px", height: "50px"}}/>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-[250px] border-b-2 border-slate-300 p-3'>
                        <div className='p-1 mb-3'>
                            <p className='text-slate-400 capitalize tracking-wider font-semibold text-xs mb-1'>per search query</p>
                            <span className='text-slate-900 font-bold'>$ 29.00</span>
                        </div>
                        <div>
                            <BarChartIcon className='text-blue-100' style={{width: "50px", height: "50px"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Queryreport />
        </div>
        </>
    )
}

export default Overview