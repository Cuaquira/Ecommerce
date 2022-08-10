import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProduct: (state, action) => {
            const product = action.payload
            return product
        }
    }
})

export const getProductThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then( res => dispatch(setProduct(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getFilterThunk = searchProduct => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${searchProduct}`)
        .then(res => dispatch(setProduct(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterThunk = (categoriesId) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoriesId}`)
        .then( res => dispatch(setProduct(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
