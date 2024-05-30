import React from "react";

interface Product {
  name: string;
  price: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
