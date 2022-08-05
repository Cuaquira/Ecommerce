import React, { useEffect, useState } from 'react';
import { getFilterThunk, getProductThunk } from '../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';



const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = useSelector(state => state.product)

    const [searchProduct, setSearchProduct] = useState("");

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearchProduct(e.target.value)}
                    value={searchProduct}
                />
                <Button variant="outline-secondary" onClick={() => dispatch(getFilterThunk(searchProduct))}>
                    Button
                </Button>
            </InputGroup>

            <Row xs={1} md={2} lg={3} className="g-4">
                {product.products?.map(productItem => (
                    <Col key={productItem.id}>
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