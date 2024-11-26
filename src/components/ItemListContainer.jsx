import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductsByCategory } from '../data/productService';

function ItemListContainer({ greeting }) {
  const { id } = useParams();  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(id)
      .then(response => setProducts(response))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">{greeting}</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img src={product.imageUrl} className="card-img-top img-fluid" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
