import React from "react";
import styled from "styled-components";

export default function ProductBox({ image, name, price, id, removeProduct }) {
  return (
    <>
      <ProductContainer>
        <ProdTitle>
          <img src={image} alt={name} />
          <p>{name}</p>
        </ProdTitle>
        <h2>{price}</h2>
        <div>
          <Quant>Quant.</Quant>
          <AddProduct>
            <ion-icon name="chevron-back"></ion-icon>
            <h1>1</h1>
            <ion-icon name="chevron-forward"></ion-icon>
          </AddProduct>
        </div>
        <TrashIcon>
          <ion-icon
            onClick={() => removeProduct(id)}
            name="trash-outline"
          ></ion-icon>
        </TrashIcon>
      </ProductContainer>
    </>
  );
}
const ProductContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 14px 0;
  img {
    width: 50px;
    height: 50px;
  }
`;
const TrashIcon = styled.div`
  ion-icon {
    color: red;
    font-size: 25px;
    margin-right: 24px;
  }
`;
const Quant = styled.h2`
  font-size: 12px;
  padding-left: 4px;
  margin: 3px 0;
`;
const ProdTitle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 15px;
  }
  p {
    max-width: 500px;
  }
`;
const AddProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    margin: 0 3px;
    color: red;
  }
`;
