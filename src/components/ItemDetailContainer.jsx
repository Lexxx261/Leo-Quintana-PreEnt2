import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductById } from '../data/productService';

function ItemDetailContainer() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(response => setProduct(response))
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

  if (!product) return <p className="text-center my-4">Producto no encontrado</p>;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img src={product.imageUrl} className="card-img-top img-fluid" alt={product.name} />
            <div className="card-body text-center">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
