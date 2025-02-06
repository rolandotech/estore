import React from 'react';
import './style.scss';
import {Box, Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea, Rating, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AppProductCard = (props) => {
    const {data, handleAddCart, handleClickView, containerStyle, key} = props;

    return (
        <Box key={key} sx={containerStyle} className="productCardContainer">
            <Card className='cardBody' sx={{ marginBottom: 2, borderRadius: 4 }}>
                <CardActionArea className='content' onClick={() => handleClickView()}>
                    <Box className="prodImgHolder">
                        <CardMedia
                            component="img"
                            className='prodImg'
                            image={data?.image}
                            title={data?.title}
                        />
                    </Box>
                    <CardContent className='contentHolder'>
                        <Typography noWrap={true} gutterBottom variant="h6" className="prodTitle">{data?.title}</Typography>
                        <Typography noWrap={true} variant="body2" color="text.secondary" className="prodDescription">{data?.description}</Typography>
                    </CardContent>
                    <CardContent className='ratingsHolder'>
                        <Rating name="half-rating-read" defaultValue={data?.rating.rate} precision={0.5} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary" className="numRate">{data?.rating.count}</Typography>
                    </CardContent>
                    <CardContent className='priceHolder'>
                        <Typography variant="body2" color="text.secondary" className="price">{data?.price ? '$' + data?.price : null}</Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions className='buttonHolder'>
                    <IconButton className='iconBtn' aria-label="delete" onClick={() => handleAddCart()} size="small"><ShoppingCartIcon /></IconButton>
                </CardActions> */}
            </Card>
        </Box>
    )

}

export default AppProductCard;