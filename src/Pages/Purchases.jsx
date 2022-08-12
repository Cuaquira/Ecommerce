import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchaseThunk } from '../store/slices/purchases.Slice';

const Purchases = () => {

    const navigate = useNavigate();
    const purchases = useSelector(state => state.purchases)
    const event = new Date(Date.UTC(2022));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPurchaseThunk())
    }, [])
    return (
        <div>
            <div>
                <p> <span className='home_detail' onClick={() => navigate("/#/")}>Home –</span> Purchases</p>
            </div>
            <h1>My Purchases</h1>
            {
                purchases.purchases?.map(news => (
                    <Card key={news.id}>
                        <Card.Header>{news.createdAt}
                            {
                                purchases.purchases?.map(titi => (
                                    <li key={titi.cart.id}>
                                        <Card.Body>
                                            <Card.Title>{titi.cart.products[0]?.title}</Card.Title>
                                            <Card.Text>
                                                S/. {titi.cart.products[0]?.price}
                                            </Card.Text>
                                            <Button variant="primary">Delete</Button>
                                        </Card.Body>
                                    </li>
                                ))
                            }
                        </Card.Header>

                    </Card>
                ))
            }
        </div>
    );
};

export default Purchases;