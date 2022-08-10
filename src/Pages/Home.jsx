import React, { useEffect, useState } from 'react';
import { filterThunk, getFilterThunk, getProductThunk } from '../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, InputGroup, Form, Button, ListGroup } from 'react-bootstrap';
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
        <div>

            <Row>
                <Col lg={3}>

                    <ListGroup>
                        {
                            category.categories?.map(categories => (
                                <ListGroup.Item 
                                key={categories.id} onClick={()=> dispatch(filterThunk(categories.id))}>
                                    {categories.name}
                                    
                                    </ListGroup.Item>

                            ))
                        }

                    </ListGroup>
                </Col>

                <Col>
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
                                        <div>
                                            <Card.Title>{productItem.price}</Card.Title>
                                            <button><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div >
    );
};

export default Home;