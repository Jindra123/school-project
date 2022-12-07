import React, {createContext, useContext} from "react";
import MenuItem from "@mui/material/MenuItem";
import {Grid} from "@mui/material";
import Select from "@mui/material/Select";
import {colors} from "../data/data";
import Typography from "@mui/material/Typography";
const grid = (theme) => ({
    marginInline: '16vw',
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw',
    },
});

export const ColorSchemaContext = createContext(null)

function Color() {

    const {valueColor, setValueColor} = useContext(ColorSchemaContext)

    return (
        <Grid sx={grid}>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                label="Choose color"
                value={valueColor}
                onChange={(e) => setValueColor(e.target.value)}
            >
                {colors.map((value) => {
                    return (
                        <MenuItem value={value.value}>{value.name}</MenuItem>
                    )
                })}
            </Select>
            <div style={{ display: 'grid', placeItems: 'center' }}></div>
                <Typography variant='h6' sx={{padding: '14px'}}>{valueColor}</Typography>
        </Grid>
    );
}

export default Color;