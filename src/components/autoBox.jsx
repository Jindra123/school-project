import React, {useContext} from "react";
import {Paper, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ColorSchemaContext} from "../pages/color";


const AutoBox = (props) => {
    const {valueColor, setValueColor} = useContext(ColorSchemaContext)

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Grid item xs={12} sx={{paddingInline: '20px', marginBottom: '10px', width: '300px'}}>
                    <Paper
                        elevation={3}
                        sx={{
                            textAlign: 'center',
                            padding: '20px',
                            marginTop: '20px',
                            boxShadow: `5px 7px 3px ${props.data.brand === 'Škoda' ? '#00C49F' : props.data.brand === 'Tesla' ? '#0088FE' : props.data.brand === 'Kia' ? '#FFBB28' : '#FF8042'}`,
                            border: `1px solid ${props.data.brand === 'Škoda' ? '#00C49F' : props.data.brand === 'Tesla' ? '#0088FE' : props.data.brand === 'Kia' ? '#FFBB28' : '#FF8042'}`
                        }}
                    >
                        <Typography variant='h4' sx={{marginBottom: '14px'}}>{props.data.brand}</Typography>
                        <Typography variant='h5' sx={{paddingBottom: '14px'}}>{props.data.brandModel}</Typography>
                        <Typography variant='h6' sx={{paddingBottom: '14px'}}>{props.data.kilometers.toLocaleString('en-US')} Km</Typography>
                        <Typography variant='h6' sx={{paddingBottom: '14px'}}>{props.data.price.toLocaleString('en-US')} Kč</Typography>
                        <Typography variant='h6' sx={{paddingBottom: '14px'}}>{props.data.fuel[0].toUpperCase() + props.data.fuel.substring(1)}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AutoBox;