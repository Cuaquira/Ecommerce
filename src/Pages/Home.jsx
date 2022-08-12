import React, { useEffect, useState } from 'react';
import { filterThunk, getFilterThunk, getProductThunk } from '../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, InputGroup, Form, Button, ListGroup, Badge } from 'react-bootstrap';
import axios from 'axios';



const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = useSelector(state => state.product)

    const [searchProduct, setSearchProduct] = useState("");
    const [category, setCategory] = useState([]);

    useEffect(() => {
        dispatch(getProductThunk())

        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/")
            .then(res => setCategory(res.data.data))
    }, []);


    console.log(product)
    return (
        <>
            <div>

                <Row>
                    <Col lg={3}>

                        <ListGroup className='Home_category'>
                            <h2>Categories</h2>
                            {
                                category.categories?.map(categories => (
                                    <ListGroup.Item
                                        key={categories.id} onClick={() => dispatch(filterThunk(categories.id))}>

                                        <p className='Category_home'>{categories.name}</p>

                                    </ListGroup.Item>

                                ))
                            }

                        </ListGroup>
                    </Col>

                    <Col>
                        <h1><i className="fa-solid fa-house"></i>Home</h1>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="What products are you looking for?"
                                aria-label="What products are you looking for?"
                                aria-describedby="basic-addon2"
                                onChange={e => setSearchProduct(e.target.value)}
                                value={searchProduct}
                            />
                            <Button variant="outline-secondary" onClick={() => dispatch(getFilterThunk(searchProduct))}>
                                Search
                            </Button>
                        </InputGroup>

                        <Row xs={1} md={2} lg={3} className="g-4">
                            {product.products?.map(productItem => (
                                <Col key={productItem.id}>
                                    <Card className='card_containerHome' onClick={() => navigate(`/shop/${productItem.id}`)}>
                                        <Card.Img variant="top" src={productItem.productImgs} />
                                        <hr />
                                        <Card.Body>
                                            <Card.Title>{productItem.title}</Card.Title>

                                            <div>
                                                <ListGroup className='container_price' as="ul" >
                                                    <ListGroup.Item
                                                        as="li"
                                                        className="d-flex justify-content-between align-items-start"
                                                    >
                                                        <div className="ms-5 me-auto">
                                                            <div className="fw-bold"></div>
                                                            <p className='Item_price'>S/.{productItem.price}</p>
                                                        </div>
                                                        <Badge bg="light" >
                                                            <Button variant="outline-danger"> <i class="fa-solid fa-cart-shopping"></i></Button>{' '}
                                                        </Badge>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div >
        </>
    );
};

export default Home;