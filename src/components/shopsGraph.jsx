import React from "react";

import {PieChart, Pie, Cell } from "recharts";
import {Grid} from "@mui/material";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
    payload
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
          {payload.name}
      </text>
    );
};

const ShopsGraph = (props) => {
    return (
        <React.Fragment>
            <Grid item xs={12} sx={{ display: 'grid', placeItems: 'center', marginBlock: '40px' }}>
                <PieChart width={window.innerWidth < 500 ? 250 : 400} height={window.innerWidth < 500 ? 250 : 250}>
                    <Pie
                        data={props.data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                </PieChart>
            </Grid>
        </React.Fragment>
    );
}

export default ShopsGraph;