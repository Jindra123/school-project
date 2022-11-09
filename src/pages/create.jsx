import React, {useState} from "react";

import {Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const styles = (theme) => ({
    marginInline: '16vw',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw'
    },
});


function Create() {
    const [inputFields ,setInputFields] = useState([
        { name: '' }
    ])
    const addFields = () => {
        setInputFields([...inputFields, { name: '' }])
    }

    const handleFormChange = (index, event) => {
        const data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const removeFields = (index) => {
        const data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    return (
        <Grid sx={styles}>
            <Typography variant="h3">Vytvořit nové obchodní centrum</Typography>
            <Box>
                <form>
                    {inputFields.map((input, index) => {
                        return (
                            <Box key={index} sx={{ display: {sx: 'grid', md: 'inline-flex'}, gap: 2, marginTop: '20px' }}>
                                <TextField
                                    name="Shop"
                                    fullWidth
                                    placeholder="Name of shop"
                                    defaultValue={input.name}
                                    sx={{ marginBlock: {md: '18px', sx: 0} }}
                                    onChange={event => handleFormChange(index, event)}
                                />
                                <Button
                                    variant="contained"
                                    color="success"
                                    size="medium"
                                    sx={{ marginBlock: '20px', width:'20vw', marginInline: '20px', maxHeight: '50px' }}
                                    onClick={addFields}
                                >
                                    Add field
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="medium"
                                    sx={{ marginBlock: '20px', marginInline: '20px', width:'20vw', maxHeight: '50px'}}
                                    onClick={() => removeFields(index)}
                                >
                                    Remove field
                                </Button>
                            </Box>
                        )
                    })}
                </form>
            </Box>
        </Grid>
    );
}

export default Create;