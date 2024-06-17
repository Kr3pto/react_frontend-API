import React from 'react';

const Cart = ({ cart }) => {
    return (
        <ul className="list-group">
            {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    Product ID: {item.product.id} - Name: {item.product.name} - Quantity: {item.quantity}
                </li>
            ))}
        </ul>
    );
};

export default Cart;
