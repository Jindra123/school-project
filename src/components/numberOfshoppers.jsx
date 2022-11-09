import React from "react";
import {Paper, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const NumberOfShoppers = (props) => {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Grid item xs={12} sx={{paddingInline: '20px', marginBottom: '10px'}}>
                    <Paper elevation={3} sx={{textAlign: 'center', padding: '20px', height: '80%'}}>
                        <Box sx={{display: {xs: 'grid', md: 'inline-flex'}, width: '100%'}}>
                            <Box sx={{
                                width: '100%',
                                display: 'grid',
                                alignItems: 'center',
                            }}>
                                <Typography variant='h4' sx={{marginBottom: '14px'}}>Celkový počet nakupujících</Typography>
                                <Typography variant='h4' sx={{marginBottom: '14px'}}>{props.numberOfPeople}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default NumberOfShoppers;