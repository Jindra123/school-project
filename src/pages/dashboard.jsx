import React, {useState} from "react";

import {Grid} from "@mui/material";

const styles = (theme) => ({
    marginInline: '16vw',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw'
    },
});


function Dashboard() {
    return (
        <Grid sx={styles}>
            <p>neco</p>
        </Grid>
    );
}

export default Dashboard;