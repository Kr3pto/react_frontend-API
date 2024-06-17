import React from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="row">
            {products.map(product => (
                <div className="col-md-4" key={product.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Price: ${product.price}</p>
                            <p className="card-text">Stock: {product.stock_quantity}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
