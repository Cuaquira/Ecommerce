import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slices/cart.Slice'
import isLoadingSlice from './slices/isLoading.slice'
import productSlice from './slices/productSlice'
import purchaseSlice from './slices/purchases.Slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        product: productSlice,
        purchases: purchaseSlice,
        cart: cartSlice
    }
})
