import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import  productSlice  from './slices/productSlice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        product: productSlice
    }
})
