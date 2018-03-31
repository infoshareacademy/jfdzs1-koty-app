import React from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BarRechart = () => {
    const data = [
        { name: 'a', value: 12,  pv: 2400, uv: 200, xv: 500 },
        { name: 'b', value: 52, pv: 1398, uv: 300, xv: 1000 },
        { name: 'c', value: 120, pv: 1398, uv: 500, xv: 900 }
    ];

    return(
        <ResponsiveContainer width="90%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
};

export default BarRechart;