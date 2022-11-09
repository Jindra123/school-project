import React from "react";

import EvaluationGraph from "../components/evaluationGraph";
import InfoBox from "../components/infoBox";
import LectorCard from "../components/lectorCard";
import StudentsTable from "../components/studentsTable";
import {infoBoxData, lektorData, studentsData} from "../data/data"
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

const styles = (theme) => ({
    marginInline: '16vw',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw'
    },
});


function Home() {

    const contactFunction = () => {
        console.log('Hello there')
    }

    return (
        <Grid sx={styles}>
            <Grid container>
                <Grid item xs={12}>
                    <InfoBox data={infoBoxData}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ marginLeft: '8px', marginTop: '2vw', marginBottom: '10px' }}>Dnešní lektor</Typography>
                    <LectorCard data={lektorData} contact={contactFunction}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ marginInline: '4.4vw', marginTop: '2vw', marginBottom: '10px' }}>Průběžné hodnocení dle tématu</Typography>
                    <EvaluationGraph />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginInline: '10px', marginTop: '2vw', marginBottom: '10px' }}>Studenti</Typography>
                    <StudentsTable data={studentsData}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;