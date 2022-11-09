import React from "react";
import {Paper, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const styles = (theme) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
});


const InfoBox = (props) => {
    return (
        <React.Fragment>
            <Grid item xs={12} sx={styles}>
                {props.data.map((info, id) => {
                    return (
                        <Grid item xs={12} sx={{paddingInline: '20px', marginBottom: '10px'}} key={id}>
                            <Paper elevation={3} sx={{ textAlign: 'center', padding: '20px', height: '80%'}} key={id}>
                                <Typography variant='h4' sx={{marginBottom: '14px'}}>{info.heading}</Typography>
                                <Typography variant='h4' sx={{paddingBottom: '14px'}}>{info.number}{info.symbol}</Typography>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    );
}

export default InfoBox;