import Warning from "../components/Warning"
import BasicTable from "../table/BasicTable"

const Merchandising = () => {
    return (
    <div className="bg-slate-100 min-h-[100vh]">
        <div className='flex justify-start items-center shadow-sm border-b-2 bg-white'>
            <div className='ml-7'>
                <h3 className="text-lg capitalize tracking-wider text-slate-700 font-semibold  p-2">search report</h3>
                <ul className="flex justify-center items-center gap-4 px-2">
                    <li className="capitalize text-sm leading-3 px-4 font-medium text-slate-100 tracking-wider  blue-bg rounded-2xl cursor-pointer">site</li>
                    <li className="capitalize text-sm font-semibold text-slate-500 tracking-wider cursor-pointer">query reports</li>
                    <li className="capitalize text-sm font-semibold text-slate-500 tracking-wider cursor-pointer">zero results queries</li>
                </ul>
            </div>
        </div>
        <Warning />
        
        <div className="mt-5  mx-7 shadow-md border-2 rounded">
            <BasicTable />
        </div>
    </div>
    )
}

export default Merchandising