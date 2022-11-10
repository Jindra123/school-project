import React from "react";

import {BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Paper} from "@mui/material";

const DashboardGraph = (props) => {
    const data = props.data.filter((elm, index) => {
        if(index < props.numberOfYears) {
            return elm;
        }
    })

    return (
        <Paper elevation={3} sx={{ padding: '20px', width: '430px' }}>
            <BarChart
                width={400}
                height={250}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={props.graphName} fill={props.graphName === 'deaths' ? '#FF8042' : props.graphName === 'population' ?  '#0088FE' : '#00C49F'}/>
            </BarChart>
        </Paper>
    );
}

export default DashboardGraph;