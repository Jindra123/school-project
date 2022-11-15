import React, {useState} from "react";

import {Grid, Select} from "@mui/material";
import DashboardGraph from "../components/dashboardGraph";
import {dashboardData} from "../data/data";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const grid = (theme) => ({
    marginInline: '16vw',
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw',
    },
});

const box = (theme) => ({
    display: 'grid',
    gap: '2%',
    [theme.breakpoints.up('xl')]: {
        display: 'flex'
    },
});



function Dashboard() {
    const [numberOfYears, setNumberOfYears] = useState(5)

    const handleChange = (e) => {
        setNumberOfYears(e.target.value)
        console.log(e)
    }

    return (
        <Grid sx={grid}>
            <Box sx={box}>
                <DashboardGraph data={dashboardData} numberOfYears={numberOfYears} graphName="population"/>
                <DashboardGraph data={dashboardData} numberOfYears={numberOfYears} graphName="liveBirths"/>
                <DashboardGraph data={dashboardData} numberOfYears={numberOfYears} graphName="deaths"/>
            </Box>
            <Select
                name="Years"
                value={numberOfYears}
                onChange={handleChange}
                sx={{marginBlock: '50px', width: '300px'}}
            >
                <MenuItem value={1}>1 year</MenuItem>
                <MenuItem value={2}>1-2 years</MenuItem>
                <MenuItem value={3}>1-3 years</MenuItem>
                <MenuItem value={4}>1-4 years</MenuItem>
                <MenuItem value={5}>1-5 years</MenuItem>
            </Select>
        </Grid>
    );
}

export default Dashboard;