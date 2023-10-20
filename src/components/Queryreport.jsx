import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name:"24-Sep-22",
    'Search Visits': "1500",
    'Search Queries': "2250"
  },
  {
    name:"25-Sep-22",
    'Search Visits': "1750",
    'Search Queries': "2500"
  },
  {
    name:"26-Sep-22",
    'Search Visits': "2000",
    'Search Queries': "3500"
  },
  {
    name:"27-Sep-22",
    'Search Visits': "1850",
    'Search Queries': "2850"
  },
  {
    name:"28-Sep-22",
    'Search Visits': "2300",
    'Search Queries': "3400"
  },
  {
    name:"29-Sep-22",
    'Search Visits': "2050",
    'Search Queries': "3050"
  },
  {
    name:"30-Sep-22",
    'Search Visits': "1600",
    'Search Queries': "2600"
  },
  {
    name:"01-Oct-22",
    'Search Visits': "1750",
    'Search Queries': "2060"
  },
  {
    name:"02-Oct-22",
    'Search Visits': "1590",
    'Search Queries': "2200"
  },
  {
    name:"03-Oct-22",
    'Search Visits': "1900",
    'Search Queries': "2900"
  },
  {
    name:"04-Oct-22",
    'Search Visits': "2050",
    'Search Queries': "3200"
  },
  {
    name:"05-Oct-22",
    'Search Visits': "2070",
    'Search Queries': "3100"
  },
  {
    name:"06-Oct-22",
    'Search Visits': "2450",
    'Search Queries': "3600"
  },
  {
    name:"07-Oct-22",
    'Search Visits': "1550",
    'Search Queries': "3080"
  },
]


const Queryreport = () => {
  return (
    <div className='flex flex-col mt-5 mx-7 shadow-md border-2 rounded bg-white'>
    <div className='p-1'>
        <h4 className='text-lg capitalize tracking-wider text-slate-700 font-semibold pl-5 pb-5 p-2'>commerce search revenue<span className='text-xs text-slate-400'> (Past 2 weeks)</span></h4>
    </div>
    <ResponsiveContainer width="100%" height={400} className="mb-4">
    <LineChart data={data}
    margin={{ top: 20, right: 50, left: 40, bottom: 0}}>
    <CartesianGrid stroke="#ccc"/>
    <XAxis dataKey="name" tickCount={12} height={30}/>
    <YAxis tickCount="6" domain={['dataMin', 'dataMax']}/>
    <Tooltip />
    <Legend iconType="square"/>
    <Line type="monotone" dataKey="Search Visits" stroke="#5582D6" dot={{ fill: '#5582D6', strokeWidth: 2 }}/>
    <Line type="monotone" dataKey="Search Queries" stroke="#42B3BE" dot={{ fill: '#42B3BE', strokeWidth: 2 }}/>
    </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default Queryreport;