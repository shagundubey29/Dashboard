/* eslint-disable jsx-a11y/anchor-is-valid */
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Banner = () => {
  return (
    <div className='flex justify-between items-center px-5  border-2 bg-slate-500 mt-0 py-1'>
        <p className='text-xs text-white p-4 pl-2 tracking-wider font-semibold'>You have successfully created your site. Click here to upload a catalog to set up the search.</p>
        <a href='#' className='text-sm text-white tracking-wider font-semibold underline'>Continue Onboarding
        <ArrowRightAltIcon fontSize='small'/>
        </a>
    </div>
  )
}

export default Banner