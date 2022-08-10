import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slices/productSlice';

const ProductDetail = () => {

    const navigate = useNavigate();
    const allProduct = useSelector(state => state.product)

    const [productDetail, setProductDetail] = useState({});

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    useEffect(() => {
        const newsproduct = allProduct.products?.find((newsProduct) => newsProduct.id === Number(id))
        setProductDetail(newsproduct)
    }, [allProduct])

    console.log(productDetail)
    return (
        <Row>
            <div>
                <p> <span className='home_detail' onClick={ () => navigate("/#/")}>Home –</span> {productDetail?.title}</p>
            </div>
            <Col>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={productDetail?.productImgs}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={productDetail.productImgs?.[1]}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={productDetail.productImgs?.[2]}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                        
                    <p>{productDetail.description}</p>
            </Col>
            <Col>

            </Col>


        </Row>
    );
};

export default ProductDetail;