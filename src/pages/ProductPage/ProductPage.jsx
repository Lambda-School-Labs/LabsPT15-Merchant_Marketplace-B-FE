import React, { useEffect, useState } from 'react';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { useOktaId } from '../../hooks/useOktaId';
import { Layout } from '../../components/common/Layout/Layout';

export const ProductPage = props => {
  const [inventory, setInventory] = useState([]);

  const { oktaId } = useOktaId();
  const { get } = useFetch();

  useEffect(
    function fetchInventory() {
      async function asyncFetch() {
        const res = await get(`items/profile/${oktaId}`);
        setInventory(res.data);
      }

      if (oktaId) {
        asyncFetch();
      }
    },
    [oktaId, get]
  );

  const paramItemId = props.match.params.id;
  const item = inventory.find(item => {
    return item.id === Number(paramItemId);
  });
  return (
    <Layout>
      <ProductInfo item={item} />
    </Layout>
  );
};

const StyledProductPage = styled.div`
  .product-page {
    padding: 10%;
  }

  .product-container {
    border-top: 1px solid lightgray;
    display: flex;
    padding-top: 5%;
    justify-content: center;
  }

  /* .carousel-container {
    height: 300px;
    background-color: lightpink;
    width: 50%;
  } */

  .item-image {
    height: 100px;
    width: auto;
  }
  img {
    height: 300px;
    width: auto;
    text-align: center;
  }

  .tags-container {
    display: flex;
  }

  .tags {
    /* background-color: lightgray;
      border-radius: 15%; */
    width: 80px;
    text-align: center;
    margin: 1%;
  }

  .item {
    display: flex;
    padding-left: 5%;
    padding-right: 5%;
    width: 50%;
    flex-direction: column;
  }

  .name-price {
    font-size: xx-large;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .rating {
  }

  .store-name {
    display: flex;
    margin-top: 2%;
  }

  h3 {
    margin-left: 1%;
  }

  @media only screen and (max-width: 600px) {
    .product-container {
      border-top: 1px solid lightgray;
      display: flex;
      flex-direction: column;
      margin-top: 20%;
      width: 100%;
      /* justify-content: center; */
    }
    .carousel-container {
      /* height: 300px; */
      background-color: lightpink;
      /* width: 50%; */
      width: 100%;
    }
    .item {
      display: flex;
      padding-left: 5%;
      padding-right: 5%;
      width: 100%;
      flex-direction: column;
    }

    .name-price {
      font-size: xx-large;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
