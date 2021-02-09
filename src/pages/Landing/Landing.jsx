import React from 'react';
import styled from 'styled-components';
import { BrowserBar } from '../../components/common/BrowserBar';
import { Layout } from '../../components/common/Layout/Layout';

export const Landing = () => {
  return (
    <Layout>
      <BrowserBar />
    </Layout>
  );
};

const StyledLanding = styled.div`
  .menu {
    width: 200px;
    padding-top: 10px;
  }

  .link {
    margin-left: 1%;
    margin-right: 1%;
    text-decoration: none;
  }

  .top-rated {
    display: flex;
    justify-content: center;
  }

  .title-1 {
    margin-top: 5%;
  }

  .title-2 {
    margin-top: 5%;
  }

  .top-img {
    height: 200px;
    background-color: rebeccapurple;
    width: 300px;
    margin-right: 2%;
    margin-left: 2%;
    box-shadow: 5px 10px gray;
  }

  .top-img:hover {
    background-color: powderblue;
  }

  .browse {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
  }

  .browse-bar {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .top-rated {
      display: flex;
      flex-direction: column;
      padding: 10%;
      margin-left: 2;
    }

    .top-img {
      height: 200px;
      background-color: rebeccapurple;
      margin: 2%;
      box-shadow: 5px 10px gray;
    }
  }
`;
