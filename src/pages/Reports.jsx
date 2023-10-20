/* eslint-disable jsx-a11y/anchor-is-valid */
import ReportWidget from '../components/ReportWidget';
import Warning from '../components/Warning';

const Reports = () => {
    return (
        <>
        <div>
            <div className='flex justify-between items-center shadow-sm border-b-2'>
                <div className='ml-7'>
                    <h3 className="'text-lg capitalize tracking-wider text-slate-700 font-semibold  p-2">search report</h3>
                    <ul className="flex justify-center items-center gap-4 px-2">
                        <li className="capitalize text-sm leading-3 px-4 font-medium text-slate-100 tracking-wider  blue-bg rounded-2xl ">site</li>
                        <li className="capitalize text-sm font-semibold text-slate-500 tracking-wider">query reports</li>
                        <li className="capitalize text-sm font-semibold text-slate-500 tracking-wider">zero results queries</li>
                        <li className="capitalize text-sm font-semibold text-slate-500 tracking-wider">product level</li>
                    </ul>
                </div>
                <div>
                    <div className="p-4"><p>date-time-range-picker</p></div>
                </div>
            </div>
            <Warning />
            <div className='flex gap-x-3 mx-7 mt-5'>
                <ReportWidget type={"query hits"}/>
                <ReportWidget type={"products clicks"}/>
                <ReportWidget type={"add to cart"}/>
                <ReportWidget type={"units sold"}/>
                <ReportWidget type={"sale through"}/>
            </div>
        </div>
        </>
    )
}

export default Reports