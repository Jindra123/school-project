import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const LectorCard = (props) => {

    return (
        <Card sx={{ maxWidth: '100%', marginLeft: '8px' }}>
            <CardMedia
                component="img"
                height="140"
                src={props.data.picture}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.contact}>Kontaktovat</Button>
            </CardActions>
        </Card>
    );
}

export default LectorCard;