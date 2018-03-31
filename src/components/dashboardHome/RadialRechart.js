import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip, Legend } from 'recharts';

const RadialRechart = () => {
    const data = [
        { name: 'a', value: 12,  uv: 500, fill: '#33cc33'  },
        { name: 'b', value: 52, uv: 800, fill: '#ffcc00'  },
        { name: 'c', value: 120, uv: 1500, fill: '#3366ff' }
    ];

    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="20%" outerRadius="90%" data={data} startAngle={0} endAngle={360}>
                <RadialBar minAngle={50} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={0} height={0} layout='vertical' verticalAlign='right' align="right" />
                <Tooltip />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default RadialRechart;