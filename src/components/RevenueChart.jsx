import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    "name": "24-Sep-22",
    "Revenue": 40000000,
  },
  {
    "name": "25-Sep-22",
    "Revenue": 90009800,
  },
  {
    "name": "26-Sep-22",
    "Revenue": 40006891,
  },
  {
    "name": "27-Sep-22",
    "Revenue": 200000000,
  },
  {
    "name": "28-Sep-22",
    "Revenue": 123006007,
  },
  {
    "name": "29-Sep-22",
    "Revenue": 100000000,
  },
  {
    "name": "30-Sep-22",
    "Revenue": 99388876,
  },
  {
    "name": "01-Oct-22",
    "Revenue": 60998765,
  },
  {
    "name": "02-Oct-22",
    "Revenue": 60000000,
  },
  {
    "name": "03-Oct-22",
    "Revenue": 20137965,
  },
  {
    "name": "04-Oct-22",
    "Revenue": 30137965,
  },
  {
    "name": "05-Oct-22",
    "Revenue": 120009098,
  }
]


const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}
    margin={{ top: 20, right: 10, left: 50, bottom: 0}}>
    <CartesianGrid stroke="#ccc"/>
    <XAxis dataKey="name" tickCount={12} height={30} stroke="#71717a"/>
    <YAxis tickCount="12" stroke="#71717a"/>
    <Tooltip />
    <Legend iconType="square"/>
    <Line type="monotone" dataKey="Revenue" stroke="#5582D6" dot={{ fill: '#5582D6', strokeWidth: 2 }}/>
  </LineChart>
    </ResponsiveContainer>
  )
}

export default RevenueChart;