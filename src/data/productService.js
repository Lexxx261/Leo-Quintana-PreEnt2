import products from './productData'; 

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(product => product.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === parseInt(id)));
    }, 500);
  });
};
