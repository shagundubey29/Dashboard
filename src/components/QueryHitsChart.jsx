import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    "name": "Sep 24",
    "Query Hits (Sep 24 - Oct 07)": 2200,
    "points" : 0
  },
  {
    "name": "25-Sep-22",
    "Revenue": 90009800,
  },
  {
    "name": "26-Sep-22",
    "Revenue": 40006891,
  }
]


const QueryHitsChart = () => {
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

export default QueryHitsChart;