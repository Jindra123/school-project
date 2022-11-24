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
import {FormControlLabel, FormLabel, Radio, RadioGroup, Slider, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function FilterDealership(props) {
    const [open, setOpen] = useState(false);
    const [sliderKilometers, setSliderKilometers] = useState([0, 100000]);
    const [sliderMoney, setSliderMoney] = useState([0, 100000]);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [fuel, setFuel] = useState("");
    const [filtersActive, setFiltersActive] = useState(false);

    let brandsFilter = [];
    let fuelFilter = [];
    let maxMoney;
    let arrMoney = [];
    let maxKilometers;
    let arrKilometers = [];


    props.data.forEach((item) => {
        arrKilometers.push(item.kilometers)
        arrMoney.push(item.price)
        if (!brandsFilter.includes(item.brand)) {
            brandsFilter.push(item.brand)
        }
        if (!fuelFilter.includes(item.fuel)) {
            fuelFilter.push(item.fuel)
        }
    })

    maxMoney = Math.max.apply(0, arrMoney)
    maxKilometers = Math.max.apply(0, arrKilometers)

    useEffect(() => {
        setSliderKilometers([0, maxKilometers])
        setSliderMoney([0, maxMoney])
    }, [maxKilometers, maxMoney])


    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    const handleFuelChange = (e) => {
        setFuel(e.target.value)
    }

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
        setBrand("")
        setModel("")
        setFuel("")
    };

    const modelsFunction = (arrayOfModels) => {
        let arr = []
        arrayOfModels.forEach((item) => {
            if (brand === "") {
                arr.push(item.brandModel)
            } else if (item.brand === brand) {
                arr.push(item.brandModel)
            }
        })
        return arr
    }

    const cancelFilters = () => {
        setFiltersActive(false)
        props.filterUpdate(props.data)
    }

    const handleSubmit = () => {
        let finalArray = props.data.filter((item) => {
            if (brand !== "") {
                return (
                    item.brand === brand
                )
            } else {
                return true
            }
        })
        finalArray = finalArray.filter((item) => {
            if (model !== "") {
                return (
                    item.brandModel === model
                )
            } else {
                return true
            }
        })
        finalArray = finalArray.filter((item) => {
            return (
                item.price >= sliderMoney[0] && item.price <= sliderMoney[1] &&
                item.kilometers >= sliderKilometers[0] && item.kilometers <= sliderKilometers[1]
            )
        })
        finalArray = finalArray.filter((item) => {
            if (fuel !== "") {
                return (
                    item.fuel === fuel
                )
            } else {
                return true
            }
        })
        setFiltersActive(true)
        props.filterUpdate(finalArray)
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
                Filter cars
            </Button>
            <Typography
                variant="subtitle2"
                sx={{
                    color: '#b0bec5',
                    display: filtersActive ? 'flex' : 'none',
                    marginTop: '10px',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer'
                    }
                }}
                onClick={cancelFilters}
            >
                <DeleteForeverOutlinedIcon />
                Cancel filters
            </Typography>
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
                            <InputLabel htmlFor="max-width">Car brand</InputLabel>
                            <Select
                                label="Choose brand"
                                value={brand}
                                onChange={(e) => handleBrandChange(e)}
                            >
                                {brandsFilter.map((item) => {
                                    return (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, minWidth: 360 }}>
                            <InputLabel htmlFor="max-width">Car model</InputLabel>
                            <Select
                                label="Choose model"
                                value={model}
                                onChange={(e) => handleModelChange(e)}
                            >
                                {modelsFunction(props.data).map((item) => {
                                    return (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <Box sx={{display: 'grid', placeItems: 'center', width: 360}}>
                            <FormControl sx={{ mt: 2, width: 260 }}>
                                <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance'}
                                    sx={{color: '#FF8042'}}
                                    value={sliderMoney}
                                    min={0}
                                    step={500}
                                    max={maxMoney}
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
                                    sx={{color: '#FF8042'}}
                                    min={0}
                                    step={500}
                                    max={maxKilometers}
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
                                value={fuel}
                                onChange={handleFuelChange}
                                name="radio-buttons-group"
                            >
                                {fuelFilter.map((item) => {
                                    return (
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item.charAt(0).toUpperCase() + item.slice(1)} />
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" sx={{backgroundColor: '#00C49F'}} onClick={handleSubmit}>Submit</Button>
                    <Button variant="contained" sx={{backgroundColor: 'red'}} onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default FilterDealership;