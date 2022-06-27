import { Area, Tooltip, AreaChart, ResponsiveContainer, XAxis } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 2000,
    },
    {
        name: 'Feb',
        uv: 3000,
    },
    {
        name: 'Mar',
        uv: 2700,
    },
    {
        name: 'Apr',
        uv: 2480,
    },
    {
        name: 'May',
        uv: 1890,
    },
    {
        name: 'Jun',
        uv: 2390,
    },
    {
        name: 'Jul',
        uv: 3490,
    },
];

export default function SecondModel() {
    return (
        <ResponsiveContainer>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="gdTeal" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#4FD1C5"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <Tooltip />
                <XAxis dataKey="name" hide />
                <Area
                    type="natural"
                    dataKey="uv"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#gdTeal)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
