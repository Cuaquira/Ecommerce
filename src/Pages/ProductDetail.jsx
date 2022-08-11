import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slices/productSlice';

const ProductDetail = () => {

    const navigate = useNavigate();
    const allProduct = useSelector(state => state.product)

    const [productDetail, setProductDetail] = useState({});
    const [similary, setSimilary] = useState([]);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    useEffect(() => {
        const newsproductss = allProduct.products?.find(newsProducts => newsProducts.id === Number(id))
        setProductDetail(newsproductss)

        const newsSimilary = allProduct.products?.filter(newsProduct => newsProduct.category.id === newsproductss.category.id)
        setSimilary(newsSimilary)

    }, [allProduct])


    return (
        <Row >
            <div>
                <p> <span className='home_detail' onClick={() => navigate("/#/")}>Home –</span> {productDetail?.title}</p>
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
                            src={productDetail?.productImgs?.[1]}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={productDetail?.productImgs?.[2]}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1>{productDetail?.title}</h1>
                <p>{productDetail?.description}</p>
            </Col>
            <Col>

            </Col>
            <div className='Similary_info'>
                <h2>Products Similary ... </h2>
            </div>
            <section  className="section">
                
            {
                similary?.map(product => (
                    <CardGroup  key={product.id}>
                        <Card className='section_card'>
                            <Card.Img variant="top" src={product.productImgs} />
                            <Card.Body>
                                <Card.Title>{product?.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{product.price}</small>
                            </Card.Footer>
                        </Card>
                        
                    </CardGroup>
                ))
            }
            
            </section>
        </Row>
    );
};

export default ProductDetail;