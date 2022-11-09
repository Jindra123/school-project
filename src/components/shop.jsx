import React, {useEffect, useState} from "react";
import {Paper, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


const Shop = (props) => {
    const [numberOfPeople, setNumberOfPeople] = useState(props.number)

    const clickFunction = (num) => {
        setNumberOfPeople((previous) => previous + 1)
        props.handleClick({ name: props.data.name, value: numberOfPeople + 1 })
    }

    useEffect(() => {
        return () => {
            props.handleOnMountedNumber({name: props.data.name, value: numberOfPeople})
        };
    }, [])

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Grid item xs={12} sx={{paddingInline: '20px', marginBottom: '10px'}} key={props.data.name}>
                    <Paper elevation={6} sx={{textAlign: 'center', padding: '20px', height: '80%', boxShadow: `5px 7px 3px ${props.data.color}`}}>
                        <Box sx={{display: {xs: 'grid', md: 'inline-flex'}, width: '100%'}}>
                            <Box sx={{
                                    width: '100%',
                                    display: 'grid',
                                    alignItems: 'center',
                                    paddingLeft: {xs: 0, md: '50px'}
                                }}
                            >
                                <Typography
                                    variant='h4'
                                    color={numberOfPeople >= props.data.maxPeople ? 'red' : 'black'}
                                    sx={{marginBottom: '14px'}}
                                >
                                    {props.data.name}
                                </Typography>
                                <Typography
                                    variant='h4'
                                    color={numberOfPeople >= props.data.maxPeople ? 'red' : 'black'}
                                    sx={{marginBottom: '14px'}}
                                >
                                    {numberOfPeople}
                                </Typography>
                            </Box>
                            <Box sx={{
                                    marginTop: '30px',
                                    '&:hover': {
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: props.data.color,
                                        border: 0,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: props.data.color,
                                            border: 0
                                        },
                                        '&:disabled': {
                                            backgroundColor: 'grey',
                                            border: 0
                                        }
                                    }}
                                    size="large"
                                    disabled={numberOfPeople >= props.data.maxPeople || props.isDisabled}
                                    onClick={clickFunction}
                                >
                                    +1
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Shop;