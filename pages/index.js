import React, { useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

import Layout from '../src/components/Layout/Layout';
import Prices from '../src/components/Prices/Prices';
import Dropdown from '../src/components/Dropdown/Dropdown';

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-right: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

function Home({ bpi }) {
  const [currency, setCurrency] = useState('USD');
  const currencyList = ['USD', 'GBP', 'EUR'];

  return (
    <Layout>
      <TitleWrapper>
        <Title>Check current bitcoin rate</Title>
        <Dropdown currencyList={currencyList} setCurrency={setCurrency} />
      </TitleWrapper>
      <Prices bpi={bpi} currency={currency} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    props: {
      bpi: data,
    },
  };
}

export default Home;
