import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, getProduct } from '../../../redux/actions/productAction'
import Loader from '../../layout/loading/Loader'
import ProductCard from '../productCard/ProductCard'
import {
  Container,
  Grid,
  Button,
  Pagination,
  Slider,
  Typography,
  Box,
  Rating,
} from '@mui/material'
import Search from '../../search/Search'
import { useParams } from 'react-router-dom'
import './Products.css'

// Category
const categories = ['Hair accessories', 'Kids accessories']
const Products = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const params = useParams()
  const { loading, error, products, productCount, resultsPerPage } =
    useSelector((state) => state.productReducer)
  // For Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const setCurrentPageNo = (e, value) => {
    setCurrentPage(value)
  }
  const pageCount = Math.ceil(productCount / resultsPerPage)
  // Price Filtering
  const [price, setprice] = useState([0, 500])
  const priceHandler = (e, newPrice) => {
    setprice(newPrice)
  }
  // Category
  const [category, setCategory] = useState('')
  // Rating
  const [rating, setRating] = useState(0)
  // Fetching data from redux
  useEffect(() => {
    // Checking if there are any errors
    // Error display using react-alert
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(category))
  }, [
    dispatch,
    error,
    alert,
    params.keyword,
    currentPage,
    price,
    category,
    rating,
  ])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Grid
          container
          justifyContent='flex-start'
          sx={{
            height: '120%',
            position: 'relative',
            top: '10.5vh',
            paddingBottom: '80px',
          }}
        >
          {products &&
            products.map((product) => (
              <Grid
                container
                lg={2}
                md={3}
                sm={4}
                xs={6}
                sx={{ maxWidth: '48vw' }}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      )}
    </Fragment>
  )
}

export default Products
