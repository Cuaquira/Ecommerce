import React, { useEffect } from 'react';
import { getProductThunk } from '../store/slices/productSlice';
import { useDispatch } from 'react-redux';



const Home = () => {

    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getProductThunk())
    }, [])


    return (
        <div>
            <h1>Home</h1>

        </div>
    );
};

export default Home;