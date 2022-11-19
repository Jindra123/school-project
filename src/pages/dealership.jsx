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
    const [cards, setCards] = useState(carDealershipData)

    const filterUpdate = (filterUpdateData) => {
        setCards(filterUpdateData)
    }

    return (
        <Grid sx={grid}>
            <FilterDealership data={carDealershipData} filterUpdate={filterUpdate}/>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '3%'}}>
                {cards.map((info, id) => {
                    return (
                        <AutoBox data={info} key={id} />
                    )
                })}
            </Box>
        </Grid>
    );
}

export default Dealership;