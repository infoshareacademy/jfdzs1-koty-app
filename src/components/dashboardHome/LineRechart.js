import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const LineRechart = () => {
    const data = [
        { name: 'a', value: 12,  pv: 2400, uv: 200, xv: 500 },
        { name: 'b', value: 52, pv: 1398, uv: 300, xv: 1000 },
        { name: 'c', value: 120, pv: 1398, uv: 500, xv: 900 }
    ];

    return(
        <ResponsiveContainer width="90%" height="80%">
            <LineChart data={data}
                       margin={{ top: 40, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="red" />
                <Line type="monotone" dataKey="uv" stroke="blue" />
                <Line type="monotone" dataKey="xv" stroke="green" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineRechart;