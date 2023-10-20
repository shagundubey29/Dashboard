/* eslint-disable jsx-a11y/anchor-is-valid */
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const Warning = () => {
    return (
    <div className='flex justify-start items-center pl-4 mt-4 border-2 border-orange-300 bg-orange-100 mx-7 rounded-md'>
        <WarningAmberRoundedIcon style={{color: "#fdba74"}}/>
        <p className='text-xs text-orange-300 p-4 pl-2 tracking-wider font-semibold'>Analytics Integration is broken for the events: Search_impression. It may impact your website's product discovery and click through rate. To view errors and their respective description.<a href='#' className='blue'> click here</a></p>
    </div>
    )
}

export default Warning