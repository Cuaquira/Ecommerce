import React, { useEffect } from 'react';
import { getProductThunk } from '../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';



const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {product.products?.map(productItem  => (
                    <Col>
                        <Card onClick={() => navigate(`/shop/${productItem.id}`)}>
                            <Card.Img variant="top" src={productItem.productImgs} />
                            <Card.Body>
                                <Card.Title>{productItem.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </div>
    );
};

export default Home;