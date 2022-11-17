import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {FormControlLabel, FormLabel, Radio, RadioGroup, Slider} from "@mui/material";
import {useState} from "react";

function FilterDealership() {
    const [open, setOpen] = useState(false);
    const [sliderKilometers, setSliderKilometers] = useState([0, 100000]);
    const [sliderMoney, setSliderMoney] = useState([0, 100000]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSliderMoneyChange = (event, newValue, activeThumb) => {
        const minDistance = 10000;

        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setSliderMoney([Math.min(newValue[0], sliderMoney[1] - minDistance), sliderMoney[1]]);
        } else {
            setSliderMoney([sliderMoney[0], Math.max(newValue[1], sliderMoney[0] + minDistance)]);
        }
    };

    const handleSliderKilometersChange = (event, newValue, activeThumb) => {
        const minDistance = 10000;

        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setSliderKilometers([Math.min(newValue[0], sliderKilometers[1] - minDistance), sliderKilometers[1]]);
        } else {
            setSliderKilometers([sliderKilometers[0], Math.max(newValue[1], sliderKilometers[0] + minDistance)]);
        }
    };

    const valueMoneySlider = (value) => {
        let scaledValue = value;

        scaledValue = scaledValue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'CZK'
        });

        return `${scaledValue}`;
    }

    const valueKilometersSlider = (value) => {
        return `${value.toLocaleString('en-US')} Km`;
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#FF8042',
                    border: 0,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#00C49F',
                        border: 0
                    }
                }}
                onClick={handleClickOpen}
            >
                Open max-width dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Filters</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Filter by you preference.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <FormControl sx={{ mt: 2, minWidth: 290 }}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                label="maxWidth"
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value="xl">xl</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, minWidth: 360 }}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                label="maxWidth"
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value="xl">xl</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{display: 'grid', placeItems: 'center', width: 360}}>
                            <FormControl sx={{ mt: 2, width: 260 }}>
                                <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance'}
                                    value={sliderMoney}
                                    min={0}
                                    step={500}
                                    max={1000000}
                                    onChange={handleSliderMoneyChange}
                                    getAriaValueText={valueMoneySlider}
                                    valueLabelFormat={valueMoneySlider}
                                    valueLabelDisplay="auto"
                                    disableSwap
                                />
                            </FormControl>
                            <FormControl sx={{ mt: 2, width: 260 }}>
                                <FormLabel id="demo-radio-buttons-group-label">Kilometers</FormLabel>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance'}
                                    value={sliderKilometers}
                                    min={0}
                                    step={500}
                                    max={100000}
                                    onChange={handleSliderKilometersChange}
                                    getAriaValueText={valueKilometersSlider}
                                    valueLabelFormat={valueKilometersSlider}
                                    valueLabelDisplay="auto"
                                    disableSwap
                                />
                            </FormControl>
                        </Box>
                        <FormControl sx={{ mt: 4, minWidth: 260 }}>
                            <FormLabel id="demo-radio-buttons-group-label">Fuel</FormLabel>
                            <RadioGroup

                                defaultValue="gas"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="gas" control={<Radio />} label="Gas" />
                                <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                                <FormControlLabel value="electric" control={<Radio />} label="Electric" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    <Button variant="contained" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default FilterDealership;