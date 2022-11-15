import React, {useState} from "react";
import {Grid, Select} from "@mui/material";
import {carDealershipData} from "../data/data";

import AutoBox from "../components/autoBox";
import FilterDealership from "../components/filterDealership";

import Box from "@mui/material/Box";

const grid = (theme) => ({
    marginInline: '16vw',
    textAlign: 'center',
    marginTop: '5%',
    display: 'grid',
    alignItems: 'center',
    placeItems: 'center',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw',
    },
});



function Dealership() {

    return (
        <Grid sx={grid}>
            <FilterDealership />
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '3%'}}>
                {carDealershipData.map((info, id) => {
                    return (
                        <AutoBox data={info} key={id} />
                    )
                })}
            </Box>
        </Grid>
    );
}

export default Dealership;