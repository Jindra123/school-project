import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import {CardActionArea, Grid} from "@mui/material";
import Shop from "../components/shop";
import ShopsGraph from "../components/shopsGraph";
import {shopsData} from "../data/data"
import NumberOfShoppers from "../components/numberOfshoppers";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const styles = (theme) => ({
    marginInline: '16vw',
    [theme.breakpoints.down('md')]: {
        marginInline: '6vw'
    },
});

function Shops() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [shopsArr, setShopsArr] = useState([])

    const handleClick = (shop) => {

        setCount((previous) => previous + 1)
        shopsArr.forEach((namShop) =>  {
            if (namShop.name === shop.name)
                namShop.value = shop.value
        })
    };

    const handleOnMountedNumber = (shop) => {
        setCount((previous) => previous + shop.value)
        shopsArr.push(shop)
    };

    function refreshClock() {
        setDate(new Date());
        setIsButtonDisabled(date.getHours() >= 22 && date.getMinutes() >= 0 && date.getSeconds() >= 0 || date.getHours() <= 6)
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <Grid sx={styles}>
            <NumberOfShoppers numberOfPeople={count} />
            <ShopsGraph data={shopsArr} />
            <Grid
                item
                xs={12}
                sx={{
                    paddingInline: '20px',
                    marginBlock: '20px',
                    textAlign: 'center',
                    display: 'grid',
                    placeItems: 'center'
                }}
            >
                <Typography variant="h2">{date.toLocaleTimeString()}</Typography>
                <Card sx={{
                        maxWidth: 345,
                        backgroundColor: '#e8f5e9',
                        marginBlock: '20px',
                        display: date.getHours() >= 22 && date.getMinutes() >= 0 && date.getSeconds() >= 0 || date.getHours() <= 6 ? 'grid' : 'none'
                    }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                You can´t add people in hours from 22:00 to 6:00. If you try to add people in those hours it will not work.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            { shopsData.map((shop, id) => {
                const randomNumber = Math.floor(Math.random() * 16);
                return (
                    <React.Fragment key={id}>
                        <Shop
                            data={shop}
                            number={randomNumber}
                            handleClick={handleClick}
                            handleOnMountedNumber={handleOnMountedNumber}
                            isDisabled={isButtonDisabled}
                        />
                    </React.Fragment>
                )
            })}
            <Box sx={{ display: 'grid', placeItems: 'center', marginBlock: '40px'}}>
                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                    >
                        Create shopping center
                    </Button>
                </Link>
            </Box>
        </Grid>
    );
}

export default Shops;