import React from 'react'
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishList } from '../../redux/actions/wishListAction'
import { addItemsToCart } from '../../redux/actions/cartAction'
import './WishList.css'
const WishList = () => {
  const dispatch = useDispatch()
  const { wishList } = useSelector((state) => state.wishListReducer)
  const { isAuthenticated, user } = useSelector((state) => state.userReducer)
  return (
    <Grid
      container
      sx={{
        position: 'relative',
        top: '13vh',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          {isAuthenticated === true ? `${user?.name}'s WishList` : 'Wishlist'}
        </Typography>
      </Grid>
      {wishList?.map((item) => (
        <Grid container lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ margin: '10px 0', width: '250px', height: '150px' }}>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <CardMedia
                  component='img'
                  height='100'
                  image={item?.image}
                  alt='item'
                />
              </Box>
              <Box>
                <CardContent>
                  <Typography gutterBottom variant='subtitle2' component='div'>
                    {item?.name}
                  </Typography>
                  <Typography variant='subtitle2' sx={{ flexGrow: 0.5 }}>
                    {item?.price} SEK
                  </Typography>
                  <Button
                    className='button'
                    size='small'
                    variant='contained'
                    onClick={(id) => {
                      dispatch(removeFromWishList(item.product))
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    className='button'
                    size='small'
                    variant='contained'
                    onClick={(id) => {
                      dispatch(removeFromWishList(item.product))
                      dispatch(addItemsToCart(item.product, 1))
                    }}
                  >
                    Move to Cart
                  </Button>
                </CardContent>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default WishList
