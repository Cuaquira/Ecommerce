import React, { useEffect } from 'react';
import { Badge, Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.Slice';

const CartSidebar = ({ show, handleClose }) => {

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    return (
        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping carts</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cart.products?.map(carts => (


                        <ListGroup>
                            <ListGroup.Item
                            key={carts.id}
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{carts.title}</div>
                                    Price: S/. {carts.price}
                                </div>
                                <Button bg="primary" >
                                    {carts.productsInCart.quantity}
                                </Button>
                            </ListGroup.Item>
                            
                        </ListGroup>
                    ))
                }
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSidebar;