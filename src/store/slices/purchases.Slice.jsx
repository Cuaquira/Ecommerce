import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from "../../utils/getConfig";

export const  purchaseSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action) =>{
            const purchases = action.payload
            return purchases
        }
    }
})

export const getPurchaseThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",getConfig())
        .then(res => dispatch(setPurchases(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = purchaseSlice.actions;

export default purchaseSlice.reducer;
