import React, {useState} from "react";

import {Grid, Select} from "@mui/material";
import DashboardGraph from "../components/dashboardGraph";
import {dashboardData} from "../data/data";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const styles = (theme) => ({
    marginInline: '16vw',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw',
    },
});


function Dashboard() {
    const [numberOfYears, setNumberOfYears] = useState(5)

    const handleChange = (e) => {
        setNumberOfYears(e.target.value)
        console.log(e)
    }

    return (
        <Grid sx={styles}>
            <Box sx={{display: {xl: 'flex', md: 'grid'}, gap: '2%', marginBlock: '20px'}}>
                <DashboardGraph data={dashboardData} numberOfYears={numberOfYears} graphName="population"/>
                <DashboardGraph data={dashboardData} numberOfYears={numberOfYears} graphName="liveBirths"/>
                <DashboardGraph data={dashboardData} numberOfYears={numberOfYears} graphName="deaths"/>
            </Box>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={numberOfYears}
                label="From - To years"
                onChange={handleChange}
                sx={{marginBlock: '20px', width: '100px'}}
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